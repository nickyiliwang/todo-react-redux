export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const TOGGLE_ITEM = "COMPLETE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SET_VISIBLE_FILTER = "SET_VISIBLE_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addItem = (text) => {
  return { type: ADD_ITEM, text }
}

export const toggleItem = (index) => {
  return { type: TOGGLE_ITEM, index }
}

export const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBLE_FILTER, filter }
}

// export const addItem = text => dispatch => {
//   dispatch({
//     type: ADD_ITEM,
//     payload: "something"
//   });
// };
// export const editItem = () => dispatch => {
//   dispatch({
//     type: EDIT_ITEM,
//     payload: "something"
//   });
// };
// export const toggleItem = () => dispatch => {
//   dispatch({
//     type: TOGGLE_ITEM,
//     payload: "something"
//   });
// };
// export const deleteItem = () => dispatch => {
//   dispatch({
//     type: DELETE_ITEM,
//     payload: "something"
//   });
// };
// export const filterItem = () => dispatch => {
//   dispatch({
//     type: FILTER_ITEM,
//     payload: "something"
//   });
// };
