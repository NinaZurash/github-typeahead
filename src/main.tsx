import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import QueryProvider from "./provider/QueryProvider.tsx";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./error/ErrorBoundary.tsx";
import TailwindIndicator from "./utils/TailwindIndicator.tsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path=":id"
              element={<h1 className="text-zinc-200">user</h1>}
            />
            <Route path="*" element={<div>Page not found 404</div>} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <TailwindIndicator />
      </QueryProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
