import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";

// This main will call App.tsx that should be in src.
// App.tsx should contains all of the pages ?

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
