import { api } from "@/utils/api";
import {
  CreateWalletResponse,
  GetWalletsResponse,
  WalletCreateRequest,
} from "../types";

export const walletService = {
  async getWallets(): Promise<GetWalletsResponse> {
    return api.get("/v1/wallet");
  },
  async createWallet(data: WalletCreateRequest): Promise<CreateWalletResponse> {
    return api.post("/v1/wallet", data);
  },
};
