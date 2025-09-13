import { TransactionListContainer } from "@/features/transactions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/transactions/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TransactionListContainer />;
}
