import { WalletsListContainer } from "@/features/wallets";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/wallets/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <WalletsListContainer />;
}
