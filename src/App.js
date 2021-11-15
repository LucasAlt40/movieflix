import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [filme, setFilme] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setFilme(data.original_title);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>The film who everyone chose is...</h2>
      <h3>
        The <strong>{filme}</strong>!
      </h3>
    </div>
  );
}

export default App;
