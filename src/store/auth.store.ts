import { Session } from "next-auth";
import { int } from "zod";
import { create } from "zustand";

export type SessionStatus = "loading" | "authenticated" | "unauthenticated";

interface AuthState {
    isAuth: boolean;
    status: SessionStatus;
    session: Session | null | undefined;
    setAuthState: (status: SessionStatus, session: Session | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuth: false,
    status: "unauthenticated",
    session: null,
    setAuthState: (status, session) =>
        set(() => ({
            status,
            session,
            isAuth: status === "authenticated",
        })),
}));
