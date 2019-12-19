const {updateTagsState, handleOpenTags, handleCloseTags, updateSearchResults, updateSearchState} = require('../redux/searchReducer');

describe(`"updateTagsState" should return the correct and necessary type`, () => {
    test(`"updateTagsState" function should update the state of tags to return search results based on the tags used.`, () => {
        expect(updateTagsState().type).toBe("UPDATE_TAGS_STATE");
    })
});
describe(`"handleOpenTags" should return the correct and necessary type`, () => {
    test(`"handleOpenTags" function should allow a user to select tags such as "javascript", for their search parameters.`, () => {
        expect(handleOpenTags().type).toBe("OPEN_TAGS");
    })
});
describe(`"handleCloseTags" should return the correct and necessary type`, () => {
    test(`"handleCloseTags" function should close the tag menu.`, () => {
        expect(handleCloseTags().type).toBe("CLOSE_TAGS");
    })
});
describe(`"updateSearchResults" should return the correct and necessary type`, () => {
    test(`"updateSearchResults" function should update the correct search results based on search parameters.`, () => {
        expect(updateSearchResults().type).toBe("UPDATE_SEARCH_RESULTS");
    })
});
describe(`"updateSearchState" should return the correct and necessary type`, () => {
    test(`"updateSearchState" function should update search's state based on user input.`, () => {
        expect(updateSearchState().type).toBe("UPDATE_SEARCH_STATE");
    })
});