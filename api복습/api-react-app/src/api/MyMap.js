import React, {useState} from "react";
import { Map, MapInfoWindow, MapMarker } from "react-kakao-maps-sdk";

function MyMap(){

    const [result, setResult] = useState('');
    const [markers,setMarkers] = useState([]);
    const [activeMarker,setActiveMarker] = useState(null);

    const center = {
        lat:33.450701,
        lng:126.570667
    }

    const handleMapClick = (event,mouseEvent)=>{
        const latlang = mouseEvent.latLng
        setResult(`클릭한 위치의 위도는 ${latlang.getLat()}이고, 경도는 ${latlang.getLng()}입니다.`)
        const newMarker = {
            id:markers.length,
            position:{lat:latlang.getLat(),lng:latlang.getLng()},
            info:`마커 위치: (${latlang.getLat()},${latlang.getLng()})`
        }
        setMarkers([...markers, newMarker]);
    }
    const handleMouseOver = (id) => {
        setActiveMarker(id);
    }
    const handleMouseOut = () =>{
        setActiveMarker(null);
    }

    return(
        <div>
            <Map
                center={center}
                style={{width:"600px",height:"600px"}}
                level={3}
                onClick={handleMapClick}
            >
                {markers.map(marker=>(
                    <MapMarker
                        key={marker.id}
                        position={marker.position}
                        onMouseOver={()=>handleMouseOver(marker.id)}
                        onMouseOut={handleMouseOut}
                    >
                        {activeMarker === marker.id && (                        
                            <div style={{padding:"5px",color:"#000"}}>
                                {marker.info}
                            </div>
                        )}
                    </MapMarker>
                ))}

            </Map>
            <p>
                지도를 클릭해주세요!
            </p>
            <p id="result">{result}</p>
        </div>
    )
}

export default MyMap;