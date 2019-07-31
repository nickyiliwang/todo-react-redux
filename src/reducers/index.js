import { combineReducers } from "redux";
import {
  ADD_ITEM,
  EDIT_ITEM,
  TOGGLE_ITEM,
  DELETE_ITEM,
  SET_VISIBLE_FILTER,
  VisibilityFilters
} from "../actions/";

const INITIAL_STATE = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

const todoApp = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_VISIBLE_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      };
    case ADD_ITEM:
      return {
        ...state,
        todos: [
          // concat with a copy of old todo
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      };
    // I don't understand this
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        })
      });

    default:
      return state;
  }
};
