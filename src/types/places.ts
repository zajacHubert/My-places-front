import { PlaceStatus } from "./place-status.enum";

export interface Place {
    id: string
    name: string;
    description: string;
    status: PlaceStatus;
    lat: number;
    lon: number;
}

export type Places = Place[];