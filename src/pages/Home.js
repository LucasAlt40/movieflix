import React from "react";
import { useSelector } from "react-redux";
import Catalog from "../components/Catalog";
import Header from "../components/Header";

export default function Home() {

  const store = useSelector((state) => state.film)
  console.log(store);

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
