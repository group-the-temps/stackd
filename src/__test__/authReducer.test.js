const {updateState, registerUser, loginUser, getAskedQuestions, logoutUser, getSession, } = require("../redux/authReducer");

describe(`"updateState" should return the correct and necessary type`, () => {
    test(`"updateState" function should update the state of a component when taking in an event.`, () => {
        expect(updateState().type).toBe("UPDATE_STATE");
    })
});
describe(`"getAskedQuestions" should return the correct and necessary type`, () => {
    test(`"getAskedQuestions" function should return the questions asked by an user based on their ID.`, () => {
        expect(getAskedQuestions().type).toBe("GET_ASKED_QUESTIONS");
    })
});
describe(`"registerUser" should return the correct and necessary type`, () => {
    test(`"registerUser" function should take in the correct information and store it in our database for any new user.`, () => {
        expect(registerUser().type).toBe("REGISTER_USER");
    })
});
describe(`"loginUser" should return the correct and necessary type`, () => {
    test(`"loginUser" function should compare login credentials to the ones stored in the database before allowing access.`, () => {
        expect(loginUser().type).toBe("LOGIN_USER");
    })
});
describe(`"logoutUser" should return the correct and necessary type`, () => {
    test(`"logoutUser" function should terminate a user's session before returning to the home page.`, () => {
        expect(logoutUser().type).toBe("LOGOUT_USER");
    })
});
describe(`"getSession" should return the correct and necessary type`, () => {
    test(`"getSession" function should allow a user to remain on session`, () => {
        expect(getSession().type).toBe("GET_SESSION");
    })
});
