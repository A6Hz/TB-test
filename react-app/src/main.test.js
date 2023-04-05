import App from "./application/app";
import { render, screen } from "@testing-library/react";

jest.mock("./infrastructure/services/getFiles.service");

it("1. Table exist", () => {
  render(<App />);

  const table = screen.getByRole("table");

  expect(table).toBeInTheDocument();
});

it("1. Buttons exist", () => {
  render(<App />);

  const buttons = screen.getAllByRole("button");

  for (const button of buttons) {
    expect(button).toBeInTheDocument();
  }
});
