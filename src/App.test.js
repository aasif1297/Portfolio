import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders primary navigation links", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
});
