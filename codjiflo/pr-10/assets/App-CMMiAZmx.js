import { j as jsxRuntimeExports } from "./_virtual/jsx-runtime-CHpI9sbA.js";
import { r as reactExports } from "./_virtual/index-TeEMZYt5.js";
import { LoginScreen } from "./features/auth/components/LoginScreen-fFwRBaZr.js";
import { useAuthStore } from "./features/auth/stores/useAuthStore-BTfEOcTv.js";
import { Dashboard } from "./pages/Dashboard-C8xHGApC.js";
import { PullRequestView } from "./pages/PullRequestView-B6JZYMNf.js";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "./node_modules/react-router/dist/development/chunk-JMJ3UQ3L-BIzjMsvR.js";
function GitHubPagesRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  reactExports.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get("p");
    if (redirectPath) {
      void navigate(decodeURIComponent(redirectPath), { replace: true });
    }
  }, [location.search, navigate]);
  return null;
}
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login", replace: true });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
function PublicRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if (isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/dashboard", replace: true });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BrowserRouter, { basename: "/codjiflo/pr-10/", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GitHubPagesRedirect, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-100 text-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/login",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(PublicRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginScreen, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/dashboard",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/pr/:owner/:repo/:number",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PullRequestView, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/dashboard", replace: true })
        }
      )
    ] }) })
  ] });
}
export {
  App as default
};
//# sourceMappingURL=App-CMMiAZmx.js.map
