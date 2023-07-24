import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = ({citiys,setCity}) => {
     return (
          <div className='weather-button'>
               <Button variant="primary" onClick={()=>setCity('current')}>Current Location</Button>
               {citiys.map((cityName,index)=>{
                    return <Button variant="outline-primary" key={index} onClick={()=>setCity(cityName)}>
                              {cityName}
                         </Button>
               })}
          </div>
     )
}

export default WeatherButton