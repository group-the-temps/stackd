import React from "react";
import {render} from '@testing-library/react';
import {Register} from "../components/Register/Register"
import { BrowserRouter } from "react-router-dom";

test('Renders Register background', () => {
    const {container} = render(<BrowserRouter><Register /></BrowserRouter>)
    expect(container.textContent).toContain("So why do it alone?")
})

test('Renders Register start learning button', () => {
    const {container} = render(<BrowserRouter><Register /></BrowserRouter>)
    expect(container.textContent).toContain("Start Learning")
})