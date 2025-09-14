import { ApiResponse } from "@/utils/api";

export interface WalletCreateRequest {
  name: string;
  type: string;
  currency: "USD" | "IDR";
  balance: number;
}

export interface Wallet {
  id: string;
  name: string;
  type: string;
  currency: "USD" | "IDR";
  balance: number;
  created_at: number;
  updated_at: number;
}

export type GetWalletsResponse = ApiResponse<Wallet[]>;
export type CreateWalletResponse = ApiResponse;
