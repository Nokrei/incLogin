import { render, screen, waitFor } from "../../test-utils";
import Form from "./Form";

describe("Login form", () => {
  it("should render", () => {
    const { container } = render(<Form />, { loading: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should login", async () => {
    const mockLogin = jest.fn();
    render(<Form />, { login: mockLogin });

    userEvent.type(screen.getByPlaceholderText("Email"), "dan@fake.com");
    userEvent.click(screen.getByText("Login"));

    await waitFor(() =>
      expect(mockLogin).toHaveBeenCalledWith({ email: "dan@fake.com" })
    );
  });
});
