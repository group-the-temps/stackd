import React from "react";
import {render} from '@testing-library/react';
import {Header} from "../components/Header/Header"
import { BrowserRouter } from "react-router-dom";



test('Renders Header slogan', () => {
    const {container} = render(<Header />)
    const h6 = container.querySelector("h6")
    expect(h6.textContent).toContain("for students, by students")
})

test('Renders Header dropdown menu text', () => {
    const {container} = render(<Header />)
    expect(container.getElementsByTagName("h3")).toContain("Browse by Topic")
})