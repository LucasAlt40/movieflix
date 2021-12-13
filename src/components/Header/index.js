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
      bg="bg-green-700"
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#1C4532",
      }}
    >
      <Heading color="#E53E3E" style={{margin: "auto 2rem"}}>MOVIEFLIX</Heading>

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
