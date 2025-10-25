import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

// basename="/Practic_React"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Practic_React">
      <App />
    </BrowserRouter>
  </StrictMode>
);
