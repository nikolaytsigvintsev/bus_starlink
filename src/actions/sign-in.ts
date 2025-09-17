'use server';

import { signIn } from "@/auth/auth";

export async function signInWithCredentials({ email, password }: { email: string; password: string }) {
    try {
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        return result;
    } catch (error) {
        console.log("Error during sign-in:", error);
        throw error;
    }

}