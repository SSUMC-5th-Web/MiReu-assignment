import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
//async를 통해 비동기로 데이터를 받아옴
//onchange를 통해 location의 값이 변경될때 마다 set location의 값이 변경되도록 설정
function App() {
  const API_KEY = `72bea87580f31bc398e8581250267c30`;
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "GET",
          url: url,
        });
        setResult(data);
        console.log(data);
      } catch (error) {
        alert("날씨 정보를 받아오지 못했습니다.");
      }
    }
  };

  return (
    <AppWrap>
      <div className="appContentWrap">
        <input
          placeholder="도시를 입력하세요."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <h1>정유영이 알려주는 날씨</h1>
            <div className="city">{result.data.name}</div>
            <div className="temperature">
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}'c
            </div>
            <div className="sky">{result.data.weather[0].main}</div>
          </ResultWrap>
        )}
      </div>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px red solid;

  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: 1px blue solid;
    padding: 20px;
  }
`;
const ResultWrap = styled.div`
  margin-top: 20px;
  border: 1px black solid;
  padding: 20px;

  .city {
    font-size: 30px;
    text-align: left;
  }

  .temperature {
    font-size: 50px;
    margin-top: 20px;
    text-align: center;
  }
  .sky {
    font-size: 30px;
    text-align: right;
    margin-top: 20px;
  }
`;
export default App;
