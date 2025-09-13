import { createFileRoute, redirect } from "@tanstack/react-router";

import { useAuthStore } from "@/features/auth/stores/auth";

import { RegisterContainer } from "@/features/auth";

export const Route = createFileRoute("/register")({
  beforeLoad: async () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;
    if (isAuthenticated) {
      throw redirect({
        to: "/main/transactions",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <RegisterContainer />;
}
