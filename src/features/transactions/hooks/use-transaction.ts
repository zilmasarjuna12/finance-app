import { useQuery } from "@tanstack/react-query";

import { transanctionService } from "../services";

export const useTransactions = () =>
  useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await transanctionService.getTransactions();
      return response.data;
    },
  });
