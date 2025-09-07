import { WalletCreateContainer } from "@/features/wallets";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/wallets/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return <WalletCreateContainer />;
}
