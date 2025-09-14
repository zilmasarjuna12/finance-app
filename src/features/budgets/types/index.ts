import { ApiResponse } from "@/utils/api";

export interface BudgetCreateRequest {
  name: string;
  amount: number;
  type: "income" | "expense";
  category: string;
}

export interface Budget {
  id: string;
  name: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  created_at: number;
  updated_at: number;
}

export type GetBudgetsResponse = ApiResponse<Budget[]>;
export type CreateBudgetResponse = ApiResponse;
