import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      console.log(data.original_title);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
