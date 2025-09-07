import { BudgetCreateContainer } from "@/features/budgets";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/budgets/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BudgetCreateContainer />;
}
