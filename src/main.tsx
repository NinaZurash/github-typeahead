import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import QueryProvider from "./provider/QueryProvider.tsx";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./error/ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryProvider>
        <App />
        <Toaster />
      </QueryProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
