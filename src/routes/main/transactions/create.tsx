import { TransactionCreateContainer } from "@/features/transactions";
import { createFileRoute, Await } from "@tanstack/react-router";

import { budgetService } from "@/features/budgets/services";
import { walletService } from "@/features/wallets/services";

export const Route = createFileRoute("/main/transactions/create")({
  loader: async () => {
    const budgets = await budgetService.getBudgets();
    const wallets = await walletService.getWallets();

    return { budgets: budgets.data, wallets: wallets.data };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { budgets, wallets } = Route.useLoaderData();

  return <TransactionCreateContainer budgets={budgets} wallets={wallets} />;
}
