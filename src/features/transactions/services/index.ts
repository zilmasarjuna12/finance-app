import { api } from "@/utils/api";

import { GetTransactionsResponse } from "../types";

export const transanctionService = {
  async getTransactions(): Promise<GetTransactionsResponse> {
    return api.get("/v1/transaction");
  },
};
