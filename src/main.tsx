import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/utils/queryClient";
import "./index.css";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-md mx-auto bg-white shadow-lg overflow-hidden h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-[#408782] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#408782] font-medium">Loading...</p>
        </div>
      </div>
    </div>
  ),
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
