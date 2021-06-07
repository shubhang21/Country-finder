import React from "react";
import { Input } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/Sort/sortAction";

const SearchBox = () => {
  const filter = useSelector((state) => state.sort.filter);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div style={{ display: "flex", padding: "30px", justifyItems: "stretch" }}>
      <Input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search Country by name"
        fullWidth="true"
      />
    </div>
  );
};

export default SearchBox;
