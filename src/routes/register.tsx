import { createFileRoute } from "@tanstack/react-router";

import { RegisterContainer } from "@/features/auth";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RegisterContainer />;
}
