import { render } from "@testing-library/react";
import React from "react";
import Button from "./button";

describe("Button", () => {
    test("renders the Button component", () => {
        render(<Button>Button Label</Button>);
    });
});
