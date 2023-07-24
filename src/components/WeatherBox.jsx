import React from 'react'

const WeatherBox = ({weather}) => {
     // const name = weather && weather.name.toUpperCase();
     // const temp = weather && weather.main.temp
     // const RH = weather && weather.main.humidity
     //축약형

     const name = weather?.name.toUpperCase(); // 현재 위치의 지역 이름을 대문자로 표시합니다.
     const temp = weather?.main.temp; // 현재 날씨의 온도를 가져옵니다.
     const RH = weather?.main.humidity; // 현재 날씨의 습도를 가져옵니다.
     const desc = weather?.weather[0].description; // 현재 날씨 상황을 가져옵니다.
     const iconName = weather?.weather[0].icon; // 날씨 아이콘의 이름을 가져옵니다.
     const iconUrl = weather && `https://openweathermap.org/img/wn/${iconName}@2x.png`; // 아이콘의 URL을 생성합니다.


     return (
          <div className='weather-box'>
               <h3 className='text-danger'>{name}</h3> {/* 지역 이름을 표시합니다. */}
               <h1 className='fs-bold'>온도: {temp}°C / 습도: {RH}%</h1> {/* 온도와 습도를 표시합니다. */}
               <div className='fs-bold h3 tex'>{desc}</div> {/* 날씨 상황을 표시합니다. */}
               <div className='text-info h3 tex'><img src={iconUrl} alt="" /></div> {/* 날씨 아이콘을 표시합니다. */}
               <div>사랑을했다</div> {/* 임의의 텍스트를 표시합니다. */}
          </div>
     )
}

export default WeatherBox