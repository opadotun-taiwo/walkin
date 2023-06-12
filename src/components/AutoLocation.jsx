import React, {useState, useRef} from 'react'
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const AutoLocation = () => {
    const inputRef = useRef();

    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();
        if(place){
            console.log(place.formatted_address);
            console.log(place.geometry.location.lat());
            console.log(place.geometry.location.lng());
        }
    }

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyBAC2GQVQTFHsQNgZrqD4907hZXyy2gidc" libraries={["places"]}>
        <StandaloneSearchBox onLoad={ref => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
            <input type='text' className='border border-slate-200 outline-0 w-[700px] h-[50px] rounded' placeholder='enter location'/>
        </StandaloneSearchBox>
      </LoadScript>
    </div>
  )
}

export default AutoLocation
