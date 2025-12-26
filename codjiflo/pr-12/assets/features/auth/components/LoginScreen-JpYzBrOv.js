import { j as jsxRuntimeExports } from "../../../_virtual/jsx-runtime-CHpI9sbA.js";
import { r as reactExports } from "../../../_virtual/index-TeEMZYt5.js";
import { useAuthStore } from "../stores/useAuthStore-BTfEOcTv.js";
import { Input } from "../../../components/Input/Input-C8LmBRFx.js";
import { Button } from "../../../components/Button/Button-BzCrBXpT.js";
import { useNavigate } from "../../../node_modules/react-router/dist/development/chunk-JMJ3UQ3L-BIzjMsvR.js";
function LoginScreen() {
  const [tokenInput, setTokenInput] = reactExports.useState("");
  const { validateToken, error, isValidating, clearError } = useAuthStore();
  const navigate = useNavigate();
  const handleAuthentication = async () => {
    try {
      const success = await validateToken(tokenInput);
      if (success) {
        void navigate("/dashboard");
      }
    } catch {
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    void handleAuthentication();
  };
  const handleInputChange = (value) => {
    setTokenInput(value);
    if (error) {
      clearError();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Connect to GitHub" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-600", children: "Enter your Personal Access Token to get started" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-8 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: "pat",
          label: "Personal Access Token",
          type: "password",
          value: tokenInput,
          onChange: (e) => handleInputChange(e.target.value),
          ...error && { error },
          disabled: isValidating,
          placeholder: "ghp_xxxxxxxxxxxx or github_pat_xxxxxxxxxxxx",
          helperText: "Your token must start with 'ghp_' or 'github_pat_'",
          required: true,
          autoFocus: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          label: isValidating ? "Validating..." : "Connect",
          disabled: isValidating || !tokenInput.trim()
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600", children: [
      "Don't have a token?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/settings/tokens/new",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded",
          children: "Create one on GitHub"
        }
      )
    ] }) })
  ] }) });
}
export {
  LoginScreen
};
//# sourceMappingURL=LoginScreen-JpYzBrOv.js.map
