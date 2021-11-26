/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import "./style.scss";
import { Link } from "react-router-dom";
import { FilmContext } from "../../providers/film";
/* import Header from "../Header"; */

import "antd/dist/antd.css";
import { Layout, Menu, Pagination, AutoComplete } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { Option } = AutoComplete;

function Home() {
  const [filme, setFilme] = useState([]);
  const [nomeFilme, setNomeFilme] = useState("");
  const [pesquisaFilme, setPesquisaFilme] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(1);
  const [result, setResult] = useState([]);

  const { setFilm } = useContext(FilmContext);
  const api_key = process.env.REACT_APP_API_KEY;
  const baseUrl = `https://api.themoviedb.org/3/`;

  const handleSearch = (value) => {
    let res = [value];

    setNomeFilme(value);
    setResult(res);
  };

  function handleSetFilm(id) {
    const filmId = id;
    localStorage.setItem("film", JSON.stringify(filmId));
    setFilm(filmId);
  }

  const fetchApi = () => {
    axios
      .get(
        `${baseUrl}trending/movie/week?api_key=${api_key}&language=pt-BR&page=${nextPage.toString()}`
      )
      .then((response) => {
        setLoading(false);
        setFilme(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchApiSearch = () => {
    axios
      .get(
        `${baseUrl}search/movie?api_key=${api_key}&language=pt-BR&query=${nomeFilme}`
      )
      .then((response) => {
        setPesquisaFilme(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchApi();
  }, [nextPage]);

  useEffect(() => {
    fetchApiSearch();
  }, [handleSearch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <h2 className="input">Filtros</h2>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Ação
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Aventura
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Drama
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              Ficção
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              Fantasia
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
              Romance
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <AutoComplete
                style={{
                  width: 200,
                  margin: "1rem",
                }}
                onSearch={handleSearch}
                placeholder="input here"
              >
                {pesquisaFilme.map((filme) => (
                  <Option key={filme.id}>
                    <Link
                      onClick={() => {
                        handleSetFilm(filme.id);
                      }}
                      to="/teste"
                    >
                      {filme.title}
                    </Link>
                  </Option>
                ))}
              </AutoComplete>
              <Pagination
                defaultCurrent={1}
                current={nextPage}
                defaultPageSize={20}
                onChange={(page) => {
                  setNextPage(page);
                }}
                total={1000}
              />
              <div className="film-container">
                {filme.map((film) => (
                  <Link
                    to="/teste"
                    onClick={() => {
                      handleSetFilm(film.id);
                    }}
                    className="film-card"
                    key={film.id}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                      alt="image"
                    />

                    <div className="title-film">
                      <h2>{film.title}</h2>
                      <h3>Nota:{film.vote_average}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Home;
