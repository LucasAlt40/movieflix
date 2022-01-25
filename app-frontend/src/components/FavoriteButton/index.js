import React, { useState } from "react";

import { Star, StarOutline } from "@mui/icons-material";

import "./styles.scss";

export default function FavoriteButton() {
  const [star, setStar] = useState(true);

  return (
    <button
      onClick={() => {
        setStar(!star);
      }}
      className="button-favorite"
    >
      {star ? <StarOutline /> : <Star />}
    </button>
  );
}
