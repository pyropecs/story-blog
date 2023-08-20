import { render, screen } from "@testing-library/react";
import App from "../App";
it("tells navbar is rendered", () => {
  render(<App />);
  const navbar = screen.getByText("About");
  expect(navbar).toBeInTheDocument();
});
