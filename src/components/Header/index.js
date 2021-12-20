/* eslint-disable */
import React from "react";
import Search from "../Search";
import Filter from "../Filter";
import { Heading } from "@chakra-ui/react";

import "./style.css";

export default function Header() {

  return (
    <header
      className="header"
    >
      <Heading color="#FFF" style={{margin: "auto 2rem"}}>MOVIEFLIX</Heading>

      <div className="buttons" style={{margin: "1rem", display: "flex"}}>
        <div style={{ margin: "auto 1rem" }}>
          <Filter />
        </div>{" "}
        <div style={{ margin: "auto 1rem" }}>
          <Search />
        </div>
      </div>
    </header>
  );
}
