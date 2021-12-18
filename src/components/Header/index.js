/* eslint-disable */
import React from "react";
import Search from "../Search";
import Filter from "../Filter";
import { Heading } from "@chakra-ui/react";

export default function Header() {
  const buttonsStyle = {
    margin: "1rem",
    display: "flex",
  };

  return (
    <header
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#0D7377",
      }}
    >
      <Heading color="#FFF" style={{margin: "auto 2rem"}}>MOVIEFLIX</Heading>

      <div className="buttons" style={buttonsStyle}>
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
