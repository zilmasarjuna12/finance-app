import { ApiResponse } from "@/utils/api";

export interface User {
  id: string;
  full_name: string;
  email: string;
  created_at: number;
  updated_at: number;
}

export interface RegisterRequest {
  full_name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterData {
  user: User;
  token: string;
  expires_at: number;
}

export interface LoginData {
  user: User;
  token: string;
  expires_at: number;
}

export type RegisterResponse = ApiResponse<RegisterData>;
export type LoginResponse = ApiResponse<LoginData>;
