import { api } from "@/utils/api";
import {
  BudgetCreateRequest,
  CreateBudgetResponse,
  GetBudgetsResponse,
} from "../types";

export const budgetService = {
  async getBudgets(): Promise<GetBudgetsResponse> {
    return api.get<GetBudgetsResponse>("/v1/budget");
  },
  async createBudget(data: BudgetCreateRequest): Promise<CreateBudgetResponse> {
    return api.post<CreateBudgetResponse>("/v1/budget", data);
  },
};
