import axios from "axios";

export const geocode = async (address: string): Promise<{
    lat: number;
    lon: number;
}> => {
    const geoRes = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const geoData = await geoRes.data;

    const lat = parseFloat(geoData[0].lat);
    const lon = parseFloat(geoData[0].lon);

    return { lat, lon };
}
