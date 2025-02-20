import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Container from "react-bootstrap/esm/Container.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <App />
    </Container>
  </StrictMode>
);
