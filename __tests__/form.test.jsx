import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../components/form/Form";
import { AuthProvider } from "../context/AuthContext";
import "@testing-library/jest-dom";

const formToRender = (
  <AuthProvider>
    <Form />
  </AuthProvider>
);

describe("Login form", () => {
  it("should render", () => {
    const { container } = render(formToRender);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should login", async () => {
    const mockLogin = jest.fn();
    render(formToRender, { login: mockLogin });

    userEvent.type(screen.getByLabelText("Username"), "incard");
    userEvent.type(
      screen.getByLabelText("Password", {
        selector: "input",
      }),
      "incard"
    );
    userEvent.click(screen.getByText("Log in"));

    await waitFor(() =>
      expect(mockLogin).toHaveBeenCalledWith({
        username: "incard",
        password: "incard",
      })
    );
  });
});
