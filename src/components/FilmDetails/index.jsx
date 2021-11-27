/* eslint-disable */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Button, Row, Col, Tooltip } from "antd";
const { Header, Content, Footer } = Layout;
const style = { padding: "8px 0" };

import "./styles.scss";

import { Link } from "react-router-dom";
import { FilmContext } from "../../providers/film";

export default function FilmDetails() {
  const { film, typeShowContext } = useContext(FilmContext);
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;

  async function fetchApi() {
    await axios
      .get(
        `https://api.themoviedb.org/3/${typeShowContext}/${film}?api_key=${api_key}&language=pt-BR`
      )
      .then(async (response) => {
        setFilme(response.data);
        setLoading(false);
      });
  }

  async function fetchApiCredits() {
    await axios
      .get(
        `https://api.themoviedb.org/3/${typeShowContext}/${film}/credits?api_key=${api_key}&language=pt-BR`
      )
      .then((response) => {
        setCast(response.data.cast);
      });
  }

  useEffect(() => {
    fetchApi();
    fetchApiCredits();
  }, [film]);

  if (loading) {
    return <h1 className="textos">Carregando</h1>;
  }

  return (
    <>
      <Layout className="layout">
        <Header>
          <Link className="logo" to="/">
            <Button type="primary">Voltar para a Home</Button>
          </Link>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>{filme.title === undefined ? filme.name : filme.title}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <div className="film-details-container">
              <div className="container1">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                  alt="teste"
                />
                <div className="textos">
                  <div>
                    <h2>
                      {filme.title === undefined ? filme.name : filme.title}
                    </h2>
                    <Tooltip title={`Total de votos: ${filme.vote_count}`}>
                      <span style={{ cursor: "pointer" }}>
                        <strong>Nota: {filme.vote_average}</strong>
                      </span>
                    </Tooltip>

                    <p>{filme.overview}</p>
                  </div>
                </div>
              </div>
              <div className="teste">
                <h2>Elenco:</h2>
                <ul>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {cast.map((casting) => (
                      <Col key={casting.id} className="gutter-row" span={6}>
                        <div style={style}>
                          <li>
                            <h3>
                              {casting.name} - {casting.character}
                            </h3>
                            <img
                              src={`https://image.tmdb.org/t/p/w200${casting.profile_path}`}
                              alt="elenco"
                            />
                          </li>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </ul>
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}

/* 

  var filmeID; all application 

  clicar no card filmeID= id do filme selecionado

  

*/
