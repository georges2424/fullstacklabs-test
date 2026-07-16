import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/CIDR Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test("displays the API endpoint URL", () => {
  render(<App />);
  const apiUrlElement = screen.getByTestId("api-url");
  // Just verify the element exists (API URL is optional via env var)
  expect(apiUrlElement).toBeInTheDocument();
});
