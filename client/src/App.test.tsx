import { render, screen } from "@testing-library/react";

import App from "./App";

it("to test the app page", async () => {
  render(<App />);
  const text = await screen.getByText("Home");
  expect(text).toBeInTheDocument();
});
