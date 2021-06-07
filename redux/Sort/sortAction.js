import { SET_ORDER, SET_ORDERBY, SET_FILTER } from "./sortType";

export const setOrder = (order) => {
  return {
    type: SET_ORDER,
    payload: order,
  };
};
export const setOrderBy = (orderBy) => {
  return {
    type: SET_ORDERBY,
    payload: orderBy,
  };
};
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

