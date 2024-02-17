import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import QueryProvider from "./provider/QueryProvider.tsx";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./error/ErrorBoundary.tsx";
import TailwindIndicator from "./utils/TailwindIndicator.tsx";

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "@/provider/UserProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
        <Toaster />
        <TailwindIndicator />
      </QueryProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
