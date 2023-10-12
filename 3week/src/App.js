import Movie from "./components/Movie";
//movieDummy.js 파일에서 dummy라는 변수를 import
import { dummy } from "./movieDummy.js";
import './index.css';
// 화면에 뜨는 카드 수 지정: grid
//hover, block > css로 마우스 오버
//overview.length > 180자로 제한하는 기능>> 긴 문자는 ... 처리


function App() {
  return (
    <div>
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
