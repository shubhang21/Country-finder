import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from "./countryTypes";
import axios from "axios";

export const fetchCountriesRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchCountriesSuccess = (countries) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: countries,
  };
};

export const fetchCountriesError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
};

export const fetchCountries = () => {
  return async (dispatch) => {
    dispatch(fetchCountriesRequest());
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        const countries = response.data;
        dispatch(fetchCountriesSuccess(countries));
      })
      .catch((error) => {
        dispatch(fetchCountriesError(error.message));
      });
  };
};
