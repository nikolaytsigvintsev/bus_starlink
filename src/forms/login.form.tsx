'use client'

import { ReactEventHandler, useState } from 'react'
import { Form, Input, Button } from "@heroui/react";
import { signInWithCredentials } from '@/actions/sign-in';

interface LoginFormProps {
    onClose: () => void;
}

export const LoginForm = ({ onClose }: LoginFormProps) => {
    const [submitted, setSubmitted] = useState<{ [k: string]: FormDataEntryValue } | null>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        const result = await signInWithCredentials({
            email: data.email as string,
            password: data.password as string
        });

        if (result.error) {
            // Handle error (e.g., show error message)
            console.log("Authorization error: ", result.error);

            return;
        }

        setSubmitted(data);
        window.location.reload();
        onClose();
    };

    return (
        <Form className="w-full max-w-xs" onSubmit={onSubmit}>
            <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
            />
            <Input
                isRequired
                errorMessage="Please enter a password"
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type="password"
            />
            <Button type="submit" variant="bordered">
                Submit
            </Button>
            {submitted && (
                <div className="text-small text-default-500">
                    You submitted: <code>{JSON.stringify(submitted)}</code>
                </div>
            )}
        </Form>
    );
}