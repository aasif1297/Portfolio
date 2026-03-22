// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => {
  const React = require("react");

  const Link = React.forwardRef(({ to, children, ...rest }, ref) =>
    React.createElement(
      "a",
      { href: typeof to === "string" ? to : "#", ref, ...rest },
      children
    )
  );

  return {
    Link,
    Navigate: () => null,
    Outlet: ({ children }) => React.createElement(React.Fragment, null, children),
    RouterProvider: ({ router }) => (router && router[0] ? router[0].element : null),
    createBrowserRouter: (routes) => routes,
    useLocation: () => ({ pathname: "/" }),
  };
}, { virtual: true });

jest.mock("react-router", () => ({
  useLocation: () => ({ pathname: "/" }),
}), { virtual: true });


jest.mock("react-github-calendar", () => ({
  __esModule: true,
  GitHubCalendar: () => null,
}));

if (!window.scrollTo) {
  Object.defineProperty(window, "scrollTo", {
    value: () => {},
    writable: true,
  });
} else {
  window.scrollTo = () => {};
}

if (window.HTMLCanvasElement) {
  window.HTMLCanvasElement.prototype.getContext = () => ({
    fillRect: () => {},
  });
}
