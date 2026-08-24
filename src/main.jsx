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

const savedTheme = localStorage.getItem("theme");

const theme = savedTheme || "dark";

document.documentElement.classList.toggle(
  "dark",
  theme === "dark"
);

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
  </StrictMode>
);