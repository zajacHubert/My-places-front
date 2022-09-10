import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.scss';
import L from 'leaflet';
import { useFetchPlacesQuery } from '../../features/api-places-slice';

const markerIcon = new L.Icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [35, 41],
})



export const Map = () => {


    const { data } = useFetchPlacesQuery();


    return (
        <div className={styles.map}>
            <MapContainer center={[52.237049, 21.017532]} zoom={12} className={styles.container}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {data && data.map(el => (
                    <Marker position={[el.lat, el.lon]} icon={markerIcon} key={el.id}>
                        <Popup>
                            <h3>{el.name}</h3>
                            <p>{el.status}</p>
                            <p>{el.description}</p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}