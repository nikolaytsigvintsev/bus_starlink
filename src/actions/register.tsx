'use server'

import { IFormDataRegistrationUser } from "@/types/form-data";
import { saltAndHashPassword } from "@/utils/password";
import { prisma } from "@/utils/prisma";



export const registerUser = async (formData: IFormDataRegistrationUser) => {
    const { email, password } = formData;

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return { error: "User with this email already exists." };
        }

        const pwdHashed = await saltAndHashPassword(password);
        const user = await prisma.user.create({
            data: {
                email,
                password: pwdHashed,
            },
        });
        return user;

    } catch (error) {
        console.log("Error creating user:", error);
        return { error };
    }


}
