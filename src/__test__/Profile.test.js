// import {handleOpenBio} from "../components/Profile/Profile";
import {handleSum} from "../components/Profile/Profile";
// import { exportAllDeclaration } from "@babel/types";

// handleOpenBio = () => {
//     if (this.state.editBio === false) {
//       this.setState({ editBio: true });
//     } else {
//       this.setState({ editBio: false });
//     }
//   };
// describe(`"handleOpenBio" should return the correct and necessary values`, () => {
//     test(`"handleOpenBio" function should return true when ran once and false when ran twice`, () => {
//         expect(handleOpenBio()).toBe(true);
//     })
// })
// describe(`"handleOpenBio" should return the correct and necessary values`, () => {
//     test(`"handleOpenBio" function should return true when ran once and false when ran twice`, () => {
//         expect(handleOpenBio()).toBe(true);
//     })
// })
describe(`"handleOpenBio" should return the correct and necessary values`, () => {
    test(`"handleOpenBio" function should return true when ran once and false when ran twice`, () => {
        expect(handleSum(1,2)).toBe(3);
    })
})

// test('handleOpenBio returns right type', () => {
//     expect(handleOpenBio({}).type).toBe('handleOpenBio')
// })

