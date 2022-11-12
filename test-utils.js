// https://testing-library.com/docs/react-native-testing-library/setup/#custom-render
import { render } from "@testing-library/react";
import { AuthProvider } from "./context/AuthContext";

const AllTheProviders = ({ children, customContext }) => {
  return (
    <AuthProvider
      value={{
        user: null,
        error: false,
        login: () => null,
        logout: () => null,
        loading: false,
        ...customContext,
      }}
    >
      {children}
    </AuthProvider>
  );
};

const customRender = (ui, customContext, options) =>
  render(ui, {
    wrapper: () => (
      <AllTheProviders customContext={customContext}>{ui}</AllTheProviders>
    ),
    ...options,
  });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
