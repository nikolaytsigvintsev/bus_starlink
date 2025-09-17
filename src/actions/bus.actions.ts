'use server'

import { IBus } from "@/types/bus";
import { IFormDataBusCreate } from "@/types/form-data";
import { prisma } from "@/utils/prisma";



export const registerBus = async (formData: IFormDataBusCreate): Promise<IBus | { error: string }> => {
    const { model, busNumber, description, route } = formData;

    try {
        const existingBus = await prisma.bus.findUnique({
            where: { busNumber },
        });

        if (existingBus) {
            return { error: "Bus with this number already exists." };
        }

        const bus = await prisma.bus.create({
            data: {
                model, busNumber, description, route
            },
        });
        if (!bus) {
            return { error: "Error creating bus." };
        }

        return bus;

    } catch (error) {
        console.log("Error creating bus:", error);
        return { error: error as string };
    }
}

export const getBuses = async (): Promise<IBus[] | { error: string }> => {
    try {
        const bus = await prisma.bus.findMany();

        if (!bus) {
            return { error: "Error get info about bus." };
        }

        return bus;

    } catch (error) {
        console.log("Error getting bus info:", error);
        return { error: error as string };
    }
}

export const deleteBus = async (id: string): Promise<IBus | { error: string }> => {
    try {
        const bus = await prisma.bus.delete({
            where: { id },
        });

        if (!bus) {
            return { error: "Error deleting bus." };
        }

        return bus;

    } catch (error) {
        console.log("Error deleting bus:", error);
        return { error: error as string };
    }
}
