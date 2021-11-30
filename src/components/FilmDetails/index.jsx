/* eslint-disable */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Carousel, Button, Menu, Tooltip } from "antd";

import "./styles.scss";

import { Link } from "react-router-dom";
import { FilmContext } from "../../providers/film";
import DefaultLayout from "../commons/DefaultLayout";
import SiderDefault from "../commons/SiderDefault";

export default function FilmDetails() {
  const { film, typeShowContext } = useContext(FilmContext);
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;

  async function fetchData(url) {
    const data = await axios.get(`https://api.themoviedb.org/3/${url}`);
    return data;
  }

  async function fetchApi() {
    const response = await fetchData(
      `${typeShowContext}/${film}?api_key=${api_key}&language=pt-BR`
    );
    setFilme(response.data);
    setLoading(false);
  }

  async function fetchApiCredits() {
    const response = await fetchData(
      `${typeShowContext}/${film}/credits?api_key=${api_key}&language=pt-BR`
    );
    setCast(response.data.cast);
  }

  const contentStyle = {
    height: "400px",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    if (film || typeShowContext) {
      fetchApi();
      fetchApiCredits();
    }
  }, [film]);

  if (loading) {
    return <h1 className="textos">Carregando</h1>;
  }

  return (
    <>
      <DefaultLayout
        siderChildren={
          <SiderDefault>
            <Menu.Item key={1}>
              <Link className="logo" to="/">
                <Button type="primary">Voltar para a Home</Button>
              </Link>
            </Menu.Item>
          </SiderDefault>
        }
      >
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
            <div className="cast">
              <h2 style={{ textAlign: "center" }}>Elenco:</h2>
              <Carousel autoplay>
                {cast.map((casting) => (
                  <div
                    style={{
                      height: "400px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={casting.id}
                  >
                    {casting.profile_path == null || undefined ? (
                      false
                    ) : (
                      <div style={contentStyle}>
                        <h1>
                          {casting.name} - {casting.character}
                        </h1>
                        <img
                          src={`https://image.tmdb.org/t/p/w200${casting.profile_path}`}
                          alt="elenco"
                          width="250px"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

{
  /* <Link className="logo" to="/">
            <Button type="primary">Voltar para a Home</Button>
          </Link> */
}
{
  /* <div className="site-layout-content">
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
              <div className="cast">
                <h2>Elenco:</h2>
                <Carousel autoplay>
                  {cast.map((casting) => (
                    <div key={casting.id}>
                      {casting.profile_path == null || undefined ? (
                        false
                      ) : (
                        <div>
                          <h3>
                            {casting.name} - {casting.character}
                          </h3>
                          <img
                            src={`https://image.tmdb.org/t/p/w200${casting.profile_path}`}
                            alt="elenco"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div> */
}
