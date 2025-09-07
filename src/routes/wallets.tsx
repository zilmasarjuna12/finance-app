import { createFileRoute } from "@tanstack/react-router";

import { WalletsListContainer } from "@/features/wallets";

export const Route = createFileRoute("/wallets")({
  component: RouteComponent,
});

function RouteComponent() {
  return <WalletsListContainer />;
}
