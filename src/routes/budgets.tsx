import { createFileRoute } from "@tanstack/react-router";

import { BudgetsListContainer } from "@/features/budgets";

export const Route = createFileRoute("/budgets")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BudgetsListContainer />;
}
