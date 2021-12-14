import React from "react";
import Catalog from "../components/Catalog";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Catalog />
      </main>
    </>
  );
}
