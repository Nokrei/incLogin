import { render, screen } from "@testing-library/react";
import Login from "../pages/index";
import { AuthProvider } from "../context/AuthContext";
import "@testing-library/jest-dom";

const loginPage = (
  <AuthProvider>
    <Login />
  </AuthProvider>
);

describe("Home", () => {
  it("renders a heading", () => {
    render(loginPage);

    const heading = screen.getByRole("heading", {
      name: "Welcome to Incard",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders all labels and their inputs", () => {
    render(loginPage);

    const usernameLabel = screen.getByLabelText("Username", {
      selector: "input",
    });
    const passwordLabel = screen.getByLabelText("Password", {
      selector: "input",
    });

    expect(usernameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  it("renders the login button", () => {
    render(loginPage);

    const loginButton = screen.getByRole("button", {
      name: "Log in",
    });

    expect(loginButton).toBeInTheDocument();
  });
});
