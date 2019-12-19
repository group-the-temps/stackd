import React from "react";
import {render} from '@testing-library/react';
import { Landing } from '../components/Landing/Landing.js';



test('Renders landing slogan', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("Ask questions. Get answers.")
})

test('Renders landing overview', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("Learning to code is hard enough. So why do it alone?")
})

test('Renders landing features header', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("Features")
})

test('Renders landing about us header', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("The Stack'd Dev Team")
})

test('Renders landing Bens section', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("Ben Anderson")
})

test('Renders landing James section', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("James Blount")
})

test('Renders landing Pat section', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("Pat Thibodeau")
})

test('Renders landing Shane section', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("Shane Gallatin")
})

test('Makes sure render does not contain bleep bloop', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).not.toContain("bleep bloop")
})






