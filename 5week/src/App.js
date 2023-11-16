import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import Celebrity from "./pages/Celebrity";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotF";
import Login from "./pages/login";  
// 라우팅의 영향을 받지 않는 컴포넌트는 routes tag 밖에 위치해야 한다.
// nav 바를 이용해 페이지 이동을 시킴
// 활용 예제 - 영화 앱 만들기2

  function App() {
    return (
      <div className="root-wrap">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/tv" element={<Tv />} />
            <Route path="/person" element={<Celebrity />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }


export default App;
