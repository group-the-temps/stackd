import React from "react";
import {render} from '@testing-library/react';
import {Profile} from "../components/Profile/Profile";

test('Renders profiles cohort name', () => {
    const {container} = render(<Profile />)
    expect(container.textContent).toContain("Cohort")
})

test('Renders Profiles header over the user asked questions', () => {
    const {container} = render(<Profile />)
    expect(container.textContent).toContain("My Questions")
})