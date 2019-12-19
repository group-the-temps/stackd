import React from "react";
import {render} from '@testing-library/react';
import {Login} from "../components/Login/Login"
import { BrowserRouter } from "react-router-dom";

test('Renders Login first heading', () => {
    const {container} = render(<BrowserRouter><Login /></BrowserRouter>)
    expect(container.textContent).toContain("So why do it alone?")
})

test('Renders Login second heading', () => {
    const {container} = render(<BrowserRouter><Login /></BrowserRouter>)
    expect(container.textContent).toContain("or save questions/topics")
})

test('Renders Login start learning button', () => {
    const {container} = render(<BrowserRouter><Login /></BrowserRouter>)
    expect(container.textContent).toContain("Start Learning")
})

