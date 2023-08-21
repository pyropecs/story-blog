import { render, screen, prettyDOM, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

it("it will change login to signup when user clicked", () => {
  const renderer = render(<App />);
  let buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  const test = screen.getByText("signup");
  expect(test).toBeInTheDocument();
});
