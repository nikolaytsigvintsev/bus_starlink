'use client';

import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { registerUser } from "@/actions/register";

function validateEmail(email: string) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface RegistrationFormProps {
    onClose: () => void;
}

export const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
    const [submitted, setSubmitted] = useState<{ [k: string]: FormDataEntryValue } | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [confirmError, setConfirmError] = useState<string | null>(null);


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        let valid = true;

        // Email validation
        if (!validateEmail(data.email as string)) {
            setEmailError("Please enter a valid email address");
            valid = false;
        } else {
            setEmailError(null);
        }

        // Password validation
        if (!(data.password as string) || (data.password as string).length < 6) {
            setPasswordError("Password must be at least 6 characters");
            valid = false;
        } else {
            setPasswordError(null);
        }

        // Confirm password validation
        if (data.password !== data.confirmPassword) {
            setConfirmError("Passwords do not match");
            valid = false;
        } else {
            setConfirmError(null);
        }

        if (!valid) return;

        setSubmitted(data);

        const result = await registerUser({
            email: data.email as string,
            password: data.password as string
        });

        console.log('result: ', result);
        onClose();
    };

    return (
        <Form className="w-full max-w-xs" onSubmit={onSubmit}>
            <Input
                isRequired
                errorMessage={emailError || "Please enter a valid email"}
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
                isInvalid={!!emailError}
            />
            <Input
                isRequired
                errorMessage={passwordError || "Please enter a password"}
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type="password"
                isInvalid={!!passwordError}
            />
            <Input
                isRequired
                errorMessage={confirmError || "Passwords do not match"}
                label="Confirm Password"
                labelPlacement="outside"
                name="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                isInvalid={!!confirmError}
            />
            <div className="flex flex-row gap-4 mt-4">
                <Button variant="bordered" color="danger" className="mt-4" onPress={onClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="bordered" color="primary" className="mt-4">
                    Register
                </Button>
            </div>

            {submitted && (
                <div className="text-small text-default-500 mt-4">
                    You submitted: <code>{JSON.stringify(submitted)}</code>
                </div>
            )}
        </Form>
    )
};