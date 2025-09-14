import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import type { BudgetCreateRequest } from "../types";

import { toast } from "sonner";

import { budgetService } from "../services";

export const useBudgets = () =>
  useQuery({
    queryKey: ["budget"],
    queryFn: async () => {
      const response = await budgetService.getBudgets();
      return response.data;
    },
  });

export const useCreateBudget = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["create-budget"],
    mutationFn: async (data: BudgetCreateRequest) =>
      budgetService.createBudget(data),
    onSuccess: () => {
      toast.success("Berhasil membuat budget");

      navigate({ to: "/main/budgets" });
    },
  });
};
