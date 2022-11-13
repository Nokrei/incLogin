import { render, screen } from "@testing-library/react";
import Login from "../pages/index";
import { AuthProvider } from "../context/AuthContext";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );

    const heading = screen.getByRole("heading", {
      name: "Welcome to Incard",
    });

    expect(heading).toBeInTheDocument();
  });
});
