import { j as jsxRuntimeExports } from "./_virtual/jsx-runtime-CHpI9sbA.js";
import { BrowserRouter, Routes, Route, Navigate } from "./node_modules/react-router/dist/development/chunk-JMJ3UQ3L-DYk8DnOd.js";
const LoginScreen = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Login Screen" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Placeholder for S-1.1" })
] });
const Dashboard = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Dashboard" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Placeholder for S-1.2" })
] });
const PullRequestView = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Pull Request View" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Placeholder for S-1.2+" })
] });
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-100 text-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/login", element: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginScreen, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/dashboard", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/pr/:id", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PullRequestView, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/dashboard", replace: true }) })
  ] }) }) });
}
export {
  App as default
};
//# sourceMappingURL=App-CbjGbHqP.js.map
