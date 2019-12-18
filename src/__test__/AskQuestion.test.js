import React from "react";
import {render} from '@testing-library/react';
import { AskQuestion } from '../components/AskQuestion/AskQuestion.js';

test('Renders landing slogan', () => {
    const {container} = render(<AskQuestion />)
    expect(container.textContent).toContain("Ask questions. Get answers.")
})