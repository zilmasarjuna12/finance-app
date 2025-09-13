import type { RegisterRequest, LoginRequest } from "../types";

import { useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth";

import { useAuthStore } from "../stores/auth";

export function useAuth() {
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);

  const register = useMutation({
    mutationFn: async (data: RegisterRequest) => authService.register(data),
    onSuccess: (res) => {
      setUser(res.data.user, res.data.token, res.data.expires_at);

      navigate({ to: "/main/budgets" });
    },
    onError: (error) => {
      throw error;
    },
  });

  const login = useMutation({
    mutationFn: async (data: LoginRequest) => authService.login(data),
    onSuccess: (res) => {
      setUser(res.data.user, res.data.token, res.data.expires_at);

      navigate({ to: "/main/budgets" });
    },
    onError: (error) => {
      throw error;
    },
  });

  return {
    register,
    login,
  };
}
