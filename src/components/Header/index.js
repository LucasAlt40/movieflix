/* eslint-disable */
import React from "react";
import Search from "../Search";
import Filter from "../Filter";
import {Button, Heading, useColorMode} from "@chakra-ui/react";

import "./style.css";

export default function Header() {

  const { colorMode, toggleColorMode } = useColorMode("dark");

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
        <div style={{ margin: "auto 1rem" }}>
          <Button bg={"#FFF"} color={"#000"} onClick={toggleColorMode}>{colorMode === 'light' ? "Dark" : "Light"} mode</Button>
        </div>
      </div>
    </header>
  );
}
