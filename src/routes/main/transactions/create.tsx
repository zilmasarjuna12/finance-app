import { TransactionCreateContainer } from "@/features/transactions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/transactions/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TransactionCreateContainer />;
}
