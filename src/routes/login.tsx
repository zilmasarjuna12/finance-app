import { createFileRoute } from "@tanstack/react-router";

import { LoginContainer } from "@/features/auth";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginContainer />;
}
