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

test('Renders landing button', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("Start Learning")
})

test('Renders landing features header', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("Features")
})

test('Renders features description', () => {
    const {container} = render(<Landing/>)
    expect(container.textContent).toContain("Quickly and easily ask your questions to the community of software developers.")
})

test('Renders landing about us header', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("The Stack'd Dev Team")
})

test('Renders landing Bens section', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).toContain("Ben Anderson")
})

test('Renders the about section for a member of the stackd team', () => {
    const {container} = render(<Landing/>)
    expect(container.textContent).toContain("Ben's about section goes here. This will be a short write up of each person")
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

test('Renders the contact us section of the landing page', () => {
    const {container} = render(<Landing/>)
    expect(container.textContent).toContain("Contact Us")
})

test('Makes sure render does not contain bleep bloop', () => {
    const {container} = render(<Landing />)
    expect(container.textContent).not.toContain("bleep bloop")
})






