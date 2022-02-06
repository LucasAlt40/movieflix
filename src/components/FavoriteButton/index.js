import React, { useState } from "react";

import { Favorite, FavoriteBorder } from "@mui/icons-material";

import "./styles.scss";

export default function FavoriteButton() {
  const [favorite, setFavorite] = useState(true);

  return (
    <button
      onClick={() => {
        setFavorite(!favorite);
      }}
      className="button-favorite"
    >
      {favorite ? <FavoriteBorder /> : <Favorite />}
    </button>
  );
}
