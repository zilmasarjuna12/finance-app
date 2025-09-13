import { createFileRoute, redirect } from "@tanstack/react-router";

import { useAuthStore } from "@/features/auth/stores/auth";

import { LoginContainer } from "@/features/auth";

export const Route = createFileRoute("/login")({
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
  return <LoginContainer />;
}
