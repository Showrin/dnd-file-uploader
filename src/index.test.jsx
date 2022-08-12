import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./index.jsx";

describe("App tests", () => {
  it("should contains the heading 1", () => {
    render(<App />);
    const heading = screen.getByText(/App Content Text/i);
    expect(heading).toBeInTheDocument();
  });
});
