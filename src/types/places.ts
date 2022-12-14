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

export type PlaceToAdd = Omit<Place, 'id'>;

export type LatLngExp = [number, number][];