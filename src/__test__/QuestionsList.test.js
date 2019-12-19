import React from "react";
import ReactDOM from "react-dom"
import {act, Simulate} from "react-dom/test-utils"
import {QuestionsList} from "../components/QuestionsList/QuestionsList"




beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
    document.body.removeChild(container)
    container = null;
})

test(`"QuestionsList should load when View Questions is clicked`, () => {
    act(() => {
        ReactDOM.render(<QuestionsList />, container);
    })

    const slogan = container.querySelector("h6")
    expect(slogan.textContent).toBe("for students, by students")
//     const h1Two = container.querySelector("h1:nth-child(2)")
//     expect(h1Two.textContent).toBe("2: Hows it going")
//     const h1Three = container.querySelector("h1:nth-child(3)")
//     expect(h1Three.textContent).toBe("3: Whats up")
})
