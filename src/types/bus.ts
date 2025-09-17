export interface IBus {
    id?: string;
    model: string;
    busNumber: string;
    description: string;
    route: string;
    createdAt?: Date;
    updatedAt?: Date;
}