import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE
} from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// async action creator (by having thunks)
export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    (async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await data.json();
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: json });
    })();
  } catch (e) {
    dispatch({ type: REQUEST_ROBOTS_FAILURE, payload: e });
  }
};
