import React from "react";
import ReactDOM from "react-dom";
import Landing from '../components/Landing/Landing.js';
import { act } from "react-dom/test-utils";

test('Renders out starting text', () => {
    act(() => {
        ReactDOM.render(<Landing />, container)
    })

    const h1 = container.querySelector("h1");
    expect(h1.textContent).toBe("Ask questions. Get answers.")
})