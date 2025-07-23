import { create } from "zustand";
import type { SignIn } from "../schemas/authSchema";
import api from "../lib/axios";

type State = {
  user: string | null;
};

type Action = {
  postSignIn: (payload: SignIn) => Promise<void>;
  postLogout: () => Promise<void>;
  setUser: (data: string) => void;
};

export const useAuthStore = create<State & Action>((set) => ({
  user: null,
  postSignIn: async (payload: SignIn) => {
    await api.post("/api/auth/sign_in", payload).catch((error) => error);
  },
  postLogout: async () => {
    await api.post("/api/auth/logout").catch((error) => error);
  },
  setUser: (data: string) => set(() => ({ user: data })),
}));
