import { z, object, string } from "zod"

export const signInSchema = z.object({
    email: z
        .string({ message: "Email is required" })
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email" }),
    password: z
        .string({ message: "Password is required" })
        .min(1, { message: "Password is required" })
        .min(6, { message: "Password must be more than 6 characters" })
        .max(32, { message: "Password must be less than 32 characters" }),
});

// export const signInSchema = object({
//     email: string({ required_error: "Email is required" })
//         .min(1, "Email is required")
//         .email("Invalid email"),
//     password: string({ required_error: "Password is required" })
//         .min(1, "Password is required")
//         .min(6, "Password must be more than 6 characters")
//         .max(32, "Password must be less than 32 characters"),
// })