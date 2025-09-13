import type { User } from "../types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  token: string | null;
  expires_at: number | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  setUser: (user: User, token: string, expires_at: number) => Promise<void>;
  clearUser: () => Promise<void>;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        // State
        user: null,
        token: null,
        isAuthenticated: false,
        expires_at: null,

        // Actions
        setUser: async (user, token, expires_at) => {
          set({
            user,
            token,
            isAuthenticated: true,
            expires_at,
          });
        },
        clearUser: async () => {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            expires_at: null,
          });
        },
      }),
      {
        name: "auth-store",
        partialize: (state) => ({
          user: state.user,
          token: state.token,
          isAuthenticated: state.isAuthenticated,
          expires_at: state.expires_at,
        }),
      }
    ),
    {
      name: "auth-store", // name of the item in the storage (must be unique)
    }
  )
);
