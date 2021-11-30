/* eslint-disable */
import React, { useEffect, useState, useContext } from "react";

import { FilmContext } from "../../../providers/film";

import "./style.scss";

import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

import { FilterOutlined, Theaters, Tv } from "@material-ui/icons";

export default function SiderDefault() {
  const { setTypeShowContext, typeShowContext } = useContext(FilmContext);
  const [typeShow, setTypeShow] = useState(typeShowContext);

  function handleSetTypeShow(typeShow) {
    const type = typeShow;
    localStorage.setItem("typeShowContext", JSON.stringify(type));
    setTypeShowContext(type);
  }

  useEffect(() => {
    handleSetTypeShow(typeShow);
  }, [typeShow]);

  return (
    <Sider className="sider">
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <h2 className="sider-title">
          Filtros <FilterOutlined />
        </h2>

        <Menu.Item
          onClick={() => {
            setTypeShow("tv");
          }}
          key="1"
          icon={<Tv />}
        >
          Séries
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            setTypeShow("movie");
          }}
          key="2"
          icon={<Theaters />}
        >
          Filmes
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
