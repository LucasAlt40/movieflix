/* eslint-disable */
import React, { useContext } from "react";

import "./style.scss";
import { FilmContext } from "../../providers/film";

import "antd/dist/antd.css";

import DefaultLayout from "../commons/DefaultLayout";

import Catalog from "../Catalog";
import SearchDetails from "../SearchDetails";

function Home() {
  const { typeShowContext } = useContext(FilmContext);

  return (
    <>
      <DefaultLayout>
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          <SearchDetails typeShow={typeShowContext} />

          <Catalog typeShow={typeShowContext} />
        </div>
      </DefaultLayout>
    </>
  );
}

export default Home;
