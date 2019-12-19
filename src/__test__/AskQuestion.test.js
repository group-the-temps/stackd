import React from "react";
import {render} from '@testing-library/react';
import { AskQuestion } from '../components/AskQuestion/AskQuestion.js';


test('Renders landing slogan', () => {
    const {container} = render(<AskQuestion/>)

    const h3 = container.getElementsByTagName("h3")
    expect(h3.textContent).toContain("Title")
})