import React, { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, pw }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("로그인 성공:", data);
        // JWT 토큰 처리
      } else {
        console.log("로그인 실패:", response.status);
      }
    } catch (error) {
      console.error("로그인 에러:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>UMC 로그인 PAGE</h1>
        <label>ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}

export default App;
