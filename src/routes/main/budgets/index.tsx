import { BudgetsListContainer } from "@/features/budgets";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/budgets/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BudgetsListContainer />;
}
