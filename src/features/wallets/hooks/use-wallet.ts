import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import type { WalletCreateRequest } from "../types";

import { walletService } from "../services";

export const useWallets = () =>
  useQuery({
    queryKey: ["wallet"],
    queryFn: async () => {
      const response = await walletService.getWallets();
      return response.data;
    },
  });

export const useCreateWallet = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["create-wallet"],
    mutationFn: async (data: WalletCreateRequest) =>
      walletService.createWallet(data),
    onSuccess: () => {
      toast.success("Berhasil membuat wallet");

      navigate({ to: "/main/wallets" });
    },
  });
};
