import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import PropagateLoader from "react-spinners/PropagateLoader";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {

  const [weather, setWeather] = useState(null);//날씨데이터
  const [city,setCity] = useState('current');
  const [loading,setLoading] = useState(true);
  const citiys = ['Paris','Upington','Bangkok','Shanghai']
  // const citiys = ['파리', '우항', '방콕', '상하이'];


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{//위도와경도를 반환하는 함수//브라우저가제공하는 기본 api기능
      let lat = position.coords.latitude;//위도
      let lon = position.coords.longitude;//경도
      // console.log('현재 내 위치는???',lat,lon)

      gerWeatherByCurrentLocation(lat,lon);

    });
  }
  // getCurrentLocation();
  //좌표 이용해서 날씨 API가져오기
  const gerWeatherByCurrentLocation = async (lat,lon) => {
    setLoading(true);
    let url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c639730a7a1960ecc6612dfa8fe6796c&units=metric&lang=kr`;//화씨를 섭씨로 바꾸는거->&units=metric//한국말->&lang=kr
    // console.log('url???',url)
    let response = await fetch(url); // URL로 API 요청을 보내고 응답을 받음
    let data = await response.json(); // 응답 데이터를 JSON 형태로 변환
    setWeather(data); // 가져온 날씨 데이터를 상태로 설정
    console.log('response???', response); // API 응답 로그 출력
    console.log('data???', data); // 날씨 데이터 로그 출력
    setLoading(false);

  }

    //도시 이름으로 날씨 API가져오기
    const gerWeatherBycity = async () => {
      setLoading(true);
      // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
      let url= ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c639730a7a1960ecc6612dfa8fe6796c&units=metric&lang=kr`;
      // console.log('url???',url)
      let response = await fetch(url); // URL로 API 요청을 보내고 응답을 받음
      let data = await response.json(); // 응답 데이터를 JSON 형태로 변환
      setWeather(data); // 가져온 날씨 데이터를 상태로 설정
      setLoading(false);
    }
  



  useEffect(()=>{
    if(city==='current'){
      getCurrentLocation(); // 컴포넌트가 마운트되면 현재 위치 정보를 가져오도록 호출
    }else{
      gerWeatherBycity();
      console.log('선택한 나라는?',city)
    }
  },[city])//화면 열렸을때 한번실행해라//공백배열이 한번만 실행시킨다 []


// console.log('weather???',weather)
// console.log('city??',city) 


  return (
    <>
      {loading ?(
        <div className='wrap container'>
          <PropagateLoader color="#455fb9" size="12" margin="0"/>
        </div>
      ):(
        <div className='wrap container'>
          <WeatherBox weather={weather} /> {/* WeatherBox 컴포넌트에 현재 날씨 데이터를 전달하여 표시 */}
          <WeatherButton citiys={citiys} setCity={setCity} />
        </div>
      )}
    </>
  );
}

export default App;
