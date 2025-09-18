import { api } from "@/utils/api";

import {
  GetTransactionsResponse,
  TransactionCreateRequest,
  CreateTransactionResponse,
} from "../types";

export const transanctionService = {
  async getTransactions(): Promise<GetTransactionsResponse> {
    return api.get("/v1/transaction");
  },

  async createTransaction(
    req: TransactionCreateRequest
  ): Promise<CreateTransactionResponse> {
    return api.post("/v1/transaction", req);
  },
};
