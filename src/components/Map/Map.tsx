import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.scss';
import L, { map } from 'leaflet';
import { useFetchPlacesQuery } from '../../features/api-places-slice';
import { colors } from '../../utils/colors';
import { messages } from '../../utils/messages';
import { MdDelete } from 'react-icons/md';



const markerIcon = new L.Icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [35, 41],
});

export const Map = () => {
    const { data, isLoading, isSuccess, isError, isFetching } = useFetchPlacesQuery(undefined, { refetchOnMountOrArgChange: true });

    if (isLoading) {
        return <p>Loading ...</p>
    } else if (isError) {
        return <p>Loading error</p>
    }

    return (
        <div className={styles.map}>
            <MapContainer center={[52.2317, 21.0061]} zoom={5} className={styles.container}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {isSuccess && data.map(el => (
                    <Marker position={[el.lat, el.lon]} icon={markerIcon} key={el.id}>
                        <Popup>
                            <h3>{el.name}</h3>
                            <p style={{ color: `${colors[el.status]}` }}>{`${messages[el.status]}`}</p>
                            <p>{el.description}</p>
                            <MdDelete className={styles.icon} />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div >
    )
}