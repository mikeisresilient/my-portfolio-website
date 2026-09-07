import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";

/*
  Theme initialization

  Dark mode is the default.
  Light mode is only activated when the user
  has explicitly selected it.
*/

let theme = "dark";

try {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    theme = savedTheme;
  }
} catch {
  theme = "dark";
}

const root = document.documentElement;

root.classList.remove("dark");

if (theme === "dark") {
  root.classList.add("dark");
}

root.style.colorScheme = theme;
const themeColorMeta = document.querySelector(
  'meta[name="theme-color"]'
);

if (themeColorMeta) {
  themeColorMeta.setAttribute(
    "content",
    theme === "dark" ? "#020617" : "#f8fafc"
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: "#0f172a",
            color: "#fff",
            border: "1px solid #1e293b",
          },
        }}
      />
    </HelmetProvider>
  </StrictMode>,
);