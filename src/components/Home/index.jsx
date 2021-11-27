/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import "./style.scss";
import { Link } from "react-router-dom";
import { FilmContext } from "../../providers/film";
/* import Header from "../Header"; */

import "antd/dist/antd.css";
import { Layout, Menu, Pagination, AutoComplete } from "antd";
import { UserOutlined, FilterOutlined } from "@ant-design/icons";

const { Content, Footer, Sider } = Layout;
const { Option } = AutoComplete;

function Home() {
  const [filme, setFilme] = useState([]);
  const [pesquisaFilme, setPesquisaFilme] = useState([]);
  const [genres, setGenres] = useState([]);
  const [nomeFilme, setNomeFilme] = useState("");
  const [typeShow, setTypeShow] = useState("tv");
  const [nextPage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { setFilm, setTypeShowContext } = useContext(FilmContext);

  const api_key = process.env.REACT_APP_API_KEY;
  const baseUrl = `https://api.themoviedb.org/3/`;

  function handleSearch(value) {
    setNomeFilme(value);
  }

  function handleSetFilm(id) {
    const filmId = id;
    localStorage.setItem("film", JSON.stringify(filmId));
    setFilm(filmId);
  }

  function handleSetTypeShow(typeShow) {
    const type = typeShow;
    localStorage.setItem("typeShowContext", JSON.stringify(type));
    setTypeShowContext(type);
  }

  const fetchApi = async () => {
    await axios
      .get(
        `${baseUrl}trending/${typeShow}/week?api_key=${api_key}&language=pt-BR&page=${nextPage.toString()}&page_size=10`
      )
      .then((response) => {
        setLoading(false);
        setFilme(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchApiGenres = async () => {
    await axios
      .get(`${baseUrl}genre/movie/list?api_key=${api_key}&language=pt-BR`)
      .then((response) => {
        setLoading(false);
        setGenres(response.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchApiSearch = async () => {
    await axios
      .get(
        `${baseUrl}search/${typeShow}?api_key=${api_key}&language=pt-BR&query=${nomeFilme}`
      )
      .then((response) => {
        setPesquisaFilme(response.data.results);
      })
      .catch((err) => {});
  };

  useEffect(fetchApi, [nextPage, typeShow]);

  useEffect(fetchApiGenres, []);

  useEffect(fetchApiSearch, [handleSearch, typeShow]);

  useEffect(() => {
    handleSetTypeShow(typeShow);
  }, [typeShow]);

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
          <h2 className="input">
            Filtros <FilterOutlined />
          </h2>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item
              onClick={() => {
                setTypeShow("tv");
              }}
              key="1"
              icon={<UserOutlined />}
            >
              Séries
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                setTypeShow("movie");
              }}
              key="2"
              icon={<UserOutlined />}
            >
              Filmes
            </Menu.Item>

            {/* {genres.map((genre) => (
              <Menu.Item key={genre.id} icon={<UserOutlined />}>
                {genre.name}
              </Menu.Item>
            ))} */}
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
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
                      {filme.title === undefined ? filme.name : filme.title}
                    </Link>
                  </Option>
                ))}
              </AutoComplete>
              <Pagination
                defaultCurrent={1}
                current={nextPage}
                defaultPageSize={20}
                pageSizeOptions={[20]}
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
                      <h2>
                        {film.title === undefined ? film.name : film.title}
                      </h2>
                      <h3>Nota:{film.vote_average}</h3>
                    </div>
                  </Link>
                ))}
              </div>
              <Pagination
                defaultCurrent={1}
                current={nextPage}
                defaultPageSize={20}
                onChange={(page) => {
                  setNextPage(page);
                }}
                total={1000}
                pageSizeOptions={[20]}
              />
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
