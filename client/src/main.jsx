import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SelectedItemProvider } from "./customHooks/SelectedItemProvider.tsx";

createRoot(document.getElementById("root")).render(
  <>
    <SelectedItemProvider>
      <App />
    </SelectedItemProvider>
  </>,
);
