import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="max-w-md mx-auto bg-white shadow-lg  overflow-hidden h-screen">
          <Outlet />
        </div>
      </div>
    </>
  ),
});
