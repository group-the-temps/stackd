import React from "react";
import {render} from '@testing-library/react';
import {Register} from "../components/Register/Register"
import { BrowserRouter } from "react-router-dom";

test('Renders Register first heading', () => {
    const {container} = render(<BrowserRouter><Register /></BrowserRouter>)
    expect(container.textContent).toContain("So why do it alone?")
})

test('Renders Register start learning button', () => {
    const {container} = render(<BrowserRouter><Register /></BrowserRouter>)
    expect(container.textContent).toContain("Start Learning")
})

test('Renders Register second heading', () => {
    const {container} = render(<BrowserRouter><Register /></BrowserRouter>)
    expect(container.textContent).toContain("give help by replying to questions")
})

test('Renders Register does not contain anything we dont want there', () => {
    const {container} = render(<BrowserRouter><Register /></BrowserRouter>)
    expect(container.textContent).not.toContain("bobody")
})