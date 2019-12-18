import React from "react";
import {render} from '@testing-library/react';
import {Login} from "../components/Login/Login"
import { BrowserRouter } from "react-router-dom";

test('Renders Login background', () => {
    const {container} = render(<BrowserRouter><Login /></BrowserRouter>)
    expect(container.textContent).toContain("So why do it alone?")
})

test('Renders Login start learning button', () => {
    const {container} = render(<BrowserRouter><Login /></BrowserRouter>)
    expect(container.textContent).toContain("Start Learning")
})