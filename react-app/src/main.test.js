import App from "./application/app";
import { render, screen } from "@testing-library/react";

jest.mock("axios", () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
    })),
  };
});

jest.mock("axiosInstance", () => {
  return {
    get: jest.fn(),
  };
});

it("1. first test", () => {
  let axiosInstance = {
    get: jest.fn(),
  };

  render(<App />);
  const linkElement = screen.getByText(/File viewer Toolbox/i);
  expect(linkElement).toBeInTheDocument();
});
