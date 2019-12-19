const {getProfile, editBio, editCohort, editDisplayName} = require("../redux/profileReducer");

describe(`"getProfile" should return the correct and necessary type`, () => {
    test(`"getProfile" function should return the correct profile based on the user's ID.`, () => {
        expect(getProfile().type).toBe("GET_PROFILE");
    })
});
describe(`"editBio" should return the correct and necessary type`, () => {
    test(`"editBio" function should allow a single user to change their personal biography and store the new biography in the database.`, () => {
        expect(editBio().type).toBe("EDIT_BIO");
    })
});
describe(`"editCohort" should return the correct and necessary type`, () => {
    test(`"editCohort" function should allow any user to change their personal cohort and store the new cohort in the database.`, () => {
        expect(editCohort().type).toBe("EDIT_COHORT");
    })
});
describe(`"editDisplayName" should return the correct and necessary type`, () => {
    test(`"editDisplayName" function should allow a user to change their personal display name and store the new display name in the database.`, () => {
        expect(editDisplayName().type).toBe("EDIT_NAME");
    })
});
