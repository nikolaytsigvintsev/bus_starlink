'use client';

import { useState } from "react";
import { Form, Input, Button, Select, SelectItem } from "@heroui/react";
import { Textarea } from "@heroui/input";
import { BUS_MODEL_OPTIONS, BUS_ROUTE_OPTIONS } from "@/constants/select-options";

import { registerBus } from "@/actions/bus.actions";
import { b } from "framer-motion/client";
import { useBusStore } from "@/store/bus.store";

interface BusFormProps {
    onClose: () => void;
}

export const BusForm = ({ onClose }: BusFormProps) => {
    const addBus = useBusStore((state) => state.addBus);
    const [submitted, setSubmitted] = useState<{ [k: string]: FormDataEntryValue } | null>(null);


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        await addBus({
            model: data.model as string,
            busNumber: data.busNumber as string,
            description: data.description as string,
            route: data.route as string
        });

        setSubmitted(data);
        onClose();
    };

    return (
        <Form className="w-full max-w-xs" onSubmit={onSubmit}>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Select isRequired classNames={{
                    base: "bg-gray-800 text-white rounded-lg",
                    trigger: "bg-gray-700 hover:bg-gray-600 border border-gray-600 focus:border-blue-500 transition-all",
                    listbox: "bg-gray-800 text-white",
                    label: "text-gray-300",
                    popoverContent: "bg-gray-800 border-gray-600",
                }}
                    name="model"
                    label="Select bus model"
                    color="primary"
                    errorMessage="Please select bus model"
                >
                    {BUS_MODEL_OPTIONS.map((model) => (
                        <SelectItem key={model.key}>{model.label}</SelectItem>
                    ))}
                </Select>
            </div>
            <Input
                isRequired
                errorMessage="Please enter a bus number"
                name="busNumber"
                label="Bus number"
                labelPlacement="outside"
                placeholder="Enter bus number"
                type="text"
                className="mt-4"
            />
            <Textarea className="max-w-xs" name="description" label="Description" placeholder="Enter a bus description" />
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Select isRequired classNames={{
                    base: "bg-gray-800 text-white rounded-lg",
                    trigger: "bg-gray-700 hover:bg-gray-600 border border-gray-600 focus:border-blue-500 transition-all",
                    listbox: "bg-gray-800 text-white",
                    label: "text-gray-300",
                    popoverContent: "bg-gray-800 border-gray-600",
                }}
                    name="route"
                    label="Select bus route"
                    color="primary"
                    errorMessage="Please select bus route"
                >
                    {BUS_ROUTE_OPTIONS.map((route) => (
                        <SelectItem key={route.key}>{route.label}</SelectItem>
                    ))}
                </Select>
            </div>
            <div className="flex flex-row gap-4 mt-4">
                <Button variant="bordered" color="danger" className="mt-4" onPress={onClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="bordered" color="primary" className="mt-4">
                    Save
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