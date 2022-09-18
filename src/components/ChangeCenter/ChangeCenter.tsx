import L from "leaflet";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../../features";

export const ChangeCenter = () => {

    const coordinate = useSelector((state: RootState) => state.coordinate.coordinates);
    const map = useMap();

    useEffect(() => {
        map.setView(coordinate[0], 7)
    }, [map, coordinate])

    return null;
}
