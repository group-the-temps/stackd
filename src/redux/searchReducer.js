const initialState = {
  tagResults: [],
  searchResults: [],
  clickedTags: false
};

const UPDATE_TAGS_STATE = "UPDATE_TAGS_STATE";
const CLOSE_TAGS = "CLOSE_TAGS";
const OPEN_TAGS = "OPEN_TAGS";
const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";
const UPDATE_SEARCH_STATE = "UPDATE_SEARCH_STATE";

export const updateTagsState = e => {
  return {
    type: UPDATE_TAGS_STATE,
    payload: e
  };
};

export const handleOpenTags = () => {
  return {
    type: OPEN_TAGS
  };
};

export const handleCloseTags = () => {
  return {
    type: CLOSE_TAGS
  };
};

export const updateSearchResults = results => {
  return {
    type: UPDATE_SEARCH_RESULTS,
    payload: results
  };
};

export const updateSearchState = e => {
  return {
    type: UPDATE_SEARCH_STATE,
    payload: e
  };
};

export default function searchReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case UPDATE_TAGS_STATE:
      return { ...state, ...payload };
    case OPEN_TAGS:
      return { ...state, clickedTags: true };
    case CLOSE_TAGS:
      return { ...state, clickedTags: false };
    case UPDATE_SEARCH_RESULTS:
      return { ...state, searchResults: payload };
    case UPDATE_SEARCH_STATE:
      return { ...state, ...payload };
    default:
      return state;
  }
}
