import axios from "axios";
import { PlaceToAdd } from "../types/places";

const baseUrl = 'http://localhost:3001/places';

export const addPlace = async (formToAdd: PlaceToAdd) => {
    const res = await axios.post(baseUrl, formToAdd);
    return res.data;
}