'use client';

import { deleteBus, getBuses, registerBus } from "@/actions/bus.actions";
import { IBus } from "@/types/bus";
import { IFormDataBusCreate } from "@/types/form-data";
import { Session } from "next-auth";
import { int } from "zod";
import { create } from "zustand";



interface BusState {
    buses: IBus[];
    isLoading: boolean;
    error: string | null;
    fetchBuses: () => Promise<void>;
    addBus: (bus: IFormDataBusCreate) => Promise<void>;
    removeBus: (id: string) => Promise<void>;
}

export const useBusStore = create<BusState>((set) => ({
    buses: [],
    isLoading: false,
    error: null,
    fetchBuses: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await getBuses();
            console.log(response);

            if (Array.isArray(response)) {
                set({ buses: response, isLoading: false });
            } else {
                set({ error: response.error || 'Failed to fetch buses', isLoading: false });
            }
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },
    addBus: async (bus) => {
        set({ isLoading: true, error: null });
        try {
            const response = await registerBus(bus);

            if ('id' in response) {
                set((state) => ({ buses: [...state.buses, response], isLoading: false }));
            } else {
                set({ error: response.error || 'Failed to fetch buses', isLoading: false });
            }
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },
    removeBus: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await deleteBus(id);

            if ('id' in response) {
                set((state) => ({ buses: state.buses.filter(bus => bus.id !== response.id) }))
            } else {
                set({ error: response.error || 'Failed to fetch buses', isLoading: false });
            }
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },
}));
