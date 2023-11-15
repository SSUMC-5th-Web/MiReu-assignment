// import React, { useState } from "react";
// import Overview from "./Overview";
// import { useNavigate } from "react-router-dom";
// //기본경로
// const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
// //movie 컴포넌트는 영화의 제목, 포스터, 평점, 개요를 보여주는 컴포넌트로 props를 받음

// //useState 훅을 사용하여 isMouseOver 상태와 해당 상태를 업데이트하기 위한 setIsMouseOver 함수를 초기화
// // isMouseOver는 마우스 커서가 영화 컨테이너 위에 있는지 여부를 추적하기 위한 상태
// export default function Movie({ title, poster_path, vote_average, overview }) {
//   const [isMouseOver, setIsMouseOver] = useState(false);
//   const handleMouseEnter = () => {
//     setIsMouseOver(true);
//   };
//   const Navigate = useNavigate();
//   const onClick = () => {
//     Navigate(`/movie/${title}`, { state: { poster_path } });
//   }
  
//   const handleMouseLeave = () => {
//     setIsMouseOver(false);
//   };
//   const shortOverview =
//     overview.length > 180 ? overview.slice(0, 180) + "..." : overview;
//   //<div className={movie-container ${isMouseOver ? "show-overview" : ""}}>는
//   // 영화 컨테이너를 나타내며, 마우스가 영화 컨테이너 위에 있을 때(isMouseOver가 true 일 때) "show-overview" 클래스가 추가
//   return (
//     <div
//       className={`movie-container ${isMouseOver ? "show-overview" : ""}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />

//       {isMouseOver && <Overview overview={shortOverview} />}
//       <div className="movie">
//         <h3>{title}</h3>
//         <span>{vote_average}</span>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Overview from "./Overview";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
//movie 컴포넌트는 영화의 제목, 포스터, 평점, 개요를 보여주는 컴포넌트로 props를 받음

//useState 훅을 사용하여 isMouseOver 상태와 해당 상태를 업데이트하기 위한 setIsMouseOver 함수를 초기화
// isMouseOver는 마우스 커서가 영화 컨테이너 위에 있는지 여부를 추적하기 위한 상태
export default function Movie(props) {
  const Navigate = useNavigate();
  const onClickMovieItem = () => {
    Navigate(`/movie/${props.title}`, { state: props });
  }
  
  const [isMouseOver, setIsMouseOver] = useState(false);
  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };


  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };
  const shortOverview =
    props.overview.length > 180 ? props.overview.slice(0, 180) + "..." :props.overview;
  //<div className={movie-container ${isMouseOver ? "show-overview" : ""}}>는
  // 영화 컨테이너를 나타내며, 마우스가 영화 컨테이너 위에 있을 때(isMouseOver가 true 일 때) "show-overview" 클래스가 추가
  return (
    <div
      className={`movie-container ${isMouseOver ? "show-overview" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClickMovieItem}
    >
      <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />

      {isMouseOver && <Overview overview={shortOverview} />}
      <div className="movie">
        <h3>{props.title}</h3>
        <span>{props.vote_average}</span>
      </div>
    </div>
  );
}
