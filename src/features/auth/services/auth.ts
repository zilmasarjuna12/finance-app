import { api } from "@/utils/api";
import {
  RegisterRequest,
  LoginRequest,
  RegisterResponse,
  LoginResponse,
} from "../types";

export const authService = {
  async register(req: RegisterRequest): Promise<RegisterResponse> {
    return api.post<RegisterResponse>("/v1/auth/register", req);
  },

  async login(req: LoginRequest): Promise<LoginResponse> {
    return api.post<LoginResponse>("/v1/auth/login", req);
  },
};
