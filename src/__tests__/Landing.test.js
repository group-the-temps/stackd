import React from "react";
import ReactDOM from "react-dom";
import Landing from '../components/Landing/Landing.js';

test('Renders out starting text', () => {
    const {container} = ReactDOM.render(<Landing />)
    expect(container.textContent).toContain('Ask questions. Get answers.')
})