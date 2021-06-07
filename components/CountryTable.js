import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCountries } from "../redux/countries/countryActions";
import { setOrder, setOrderBy } from "../redux/Sort/sortAction";
import { Table, TableCell, TableBody, TableHead, TableRow, TableSortLabel, Paper} from "@material-ui/core";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const head = [
  { id: "name", label: "Name" },
  { id: "demonym", label: "Demonym" },
  { id: "region", label: "Region" },
  { id: "subregion", label: "Subregion" },
  { id: "capital", label: "Capital" },
  { id: "area", label: "Area" },
  { id: "population", label: "Population" },
];
function CountryTable() {
  const filter = useSelector((state) => state.sort.filter);
  const countries = useSelector((state) => state.country.countries);
  const order = useSelector((state) => state.sort.order);
  const orderBy = useSelector((state) => state.sort.orderBy);

  const dispatch = useDispatch();

  const filterCountry = countries.filter((country) => {
    return country.name.toLowerCase().includes(filter.toLowerCase());
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    dispatch(setOrder(isAsc ? "desc" : "asc"));
    dispatch(setOrderBy(property));
  };
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const onRequestSort = handleRequestSort;
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  

  return (
    <div>
      <Paper
        style={{
          height: "500px",
          overflowY: "scroll",
          marginRight: "40px",
          marginLeft: "40px",
        }}
      >
        <Table stickyHeader>
          <TableHead >
            <TableRow>
              {head.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(filterCountry, getComparator(order, orderBy)).map(
              (country) => (
                <TableRow key={country.name}>
                  <TableCell>{country.name}</TableCell>
                  <TableCell>{country.demonym}</TableCell>
                  <TableCell>{country.region}</TableCell>
                  <TableCell>{country.subregion}</TableCell>
                  <TableCell>{country.capital}</TableCell>
                  <TableCell>{country.area}</TableCell>
                  <TableCell>{country.population}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default CountryTable;
