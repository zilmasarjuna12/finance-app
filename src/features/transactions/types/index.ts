import { ApiResponse } from "@/utils/api";

export interface TransactionCreateRequest {
  wallet_id: string;
  amount: number;
  type: "expense" | "income";
  category: string;
  note?: string;
  transaction_date: number;
}

export interface Transaction {
  id: string;
  wallet: {
    id: string;
    name: string;
  };
  amount: number;
  type: "expense" | "income";
  category: string;
  note?: string;
  transaction_date: number;
  created_at: number;
  updated_at: number;
}

export type GetTransactionsResponse = ApiResponse<Transaction[]>;
export type CreateTransactionResponse = ApiResponse;
