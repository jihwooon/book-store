import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders book store", () => {
  render(<App />);
  const linkElement = screen.getByText(/bookStore/i);
  expect(linkElement).toBeInTheDocument();
});
