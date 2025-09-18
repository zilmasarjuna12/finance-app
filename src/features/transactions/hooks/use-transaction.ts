import { toast } from "sonner";

import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { transanctionService } from "../services";
import { TransactionCreateRequest } from "../types";

export const useTransactions = () =>
  useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await transanctionService.getTransactions();
      return response.data;
    },
  });

export const useCreateTransaction = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["create-transaction"],
    mutationFn: async (data: TransactionCreateRequest) =>
      transanctionService.createTransaction(data),
    onSuccess: () => {
      // Optionally, you can add success handling here
      toast.success("Berhasil membuat transaksi");

      navigate({ to: "/main/transactions" });
    },
  });
};
