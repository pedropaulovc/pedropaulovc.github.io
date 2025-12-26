import { j as jsxRuntimeExports } from "../_virtual/jsx-runtime-CHpI9sbA.js";
import { r as reactExports } from "../_virtual/index-TeEMZYt5.js";
import { Input } from "../components/Input/Input-C8LmBRFx.js";
import { Button } from "../components/Button/Button-BzCrBXpT.js";
import "../features/pr/stores/usePRStore-1zUWOZRO.js";
import "../components/ui/Badge-Bxhxl-4W.js";
import { parseGitHubPRUrl } from "../features/pr/utils/parse-pr-url-pV5z854Y.js";
import { useAuthStore } from "../features/auth/stores/useAuthStore-BTfEOcTv.js";
import { useNavigate } from "../node_modules/react-router/dist/development/chunk-JMJ3UQ3L-BIzjMsvR.js";
function Dashboard() {
  const [url, setUrl] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const parsed = parseGitHubPRUrl(url);
    if (!parsed) {
      setError("Invalid GitHub PR URL. Please enter a URL like: https://github.com/owner/repo/pull/123");
      return;
    }
    void navigate(`/pr/${parsed.owner}/${parsed.repo}/${String(parsed.number)}`);
  };
  const handleLogout = () => {
    logout();
    void navigate("/login");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "bg-white border-b px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-gray-900", children: "CodjiFlo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleLogout,
          className: "text-sm text-gray-600 hover:text-gray-900",
          children: "Logout"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-2xl mx-auto mt-16 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-sm p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: "View Pull Request" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "Enter a GitHub Pull Request URL to start reviewing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "pr-url",
              label: "GitHub Pull Request URL",
              type: "url",
              value: url,
              onChange: (e) => {
                setUrl(e.target.value);
                if (error) setError("");
              },
              placeholder: "https://github.com/owner/repo/pull/123",
              error,
              required: true,
              autoFocus: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              label: "Load Pull Request",
              disabled: !url.trim()
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-sm text-gray-500", children: "Paste any public GitHub pull request URL to view its changes" })
    ] })
  ] });
}
export {
  Dashboard
};
//# sourceMappingURL=Dashboard-Ck1ahTFx.js.map
