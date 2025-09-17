import NextAuth from "next-auth"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "@/schema/zod"
// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword } from "@/utils/password"
import { getUserFromDb } from "@/utils/user"
import { prisma } from "@/utils/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import bcryptjs from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        throw new Error("Need both email and password.")
                    }

                    const { email, password } = await signInSchema.parseAsync(credentials);

                    // logic to salt and hash password
                    // const pwHash = saltAndHashPassword(password);

                    // logic to verify if the user exists
                    const user = await getUserFromDb(email)

                    if (!user || !user.password) {
                        throw new Error("Invalid user.")
                    }

                    const isPasswordValid = await bcryptjs.compare(password, user.password);

                    if (!isPasswordValid) {
                        throw new Error("Invalid data.")
                    }

                    return { id: user?.id, email: user?.email };

                } catch (error) {
                    if (error instanceof ZodError) {
                        console.log("Validation error:", error);

                        // Return `null` to indicate that the credentials are invalid
                        return null;
                    }
                    return null;
                }
            },
        }),
    ],
    session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60, }, // 30 days
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            // First time jwt callback is run, user object is available
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },

})