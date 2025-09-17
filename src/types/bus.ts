export interface IBus {
    id: string;
    model: string;
    busNumber: string;
    description: string | null;
    route: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}