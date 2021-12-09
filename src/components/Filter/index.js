/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";

import fetchData from "../../functions/fetchData";

export default function Filter() {
  const [genres, setGenres] = useState([]);

  const apiKey = "0b001cf6e81fdfed426c49bcb1a2de2e";

  async function fetchApi() {
    const response = await fetchData(
      `/genre/movie/list?api_key=${apiKey}&language=pt-BR`
    );
    setGenres(response.genres);
  }

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="blue">
          Filtros
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup
            defaultValue="asc"
            title="Filtrar por..."
            type="radio"
          >
            <MenuItemOption value="ultimos">Ultimos Lançados</MenuItemOption>
            <MenuItemOption value="populares">Populares</MenuItemOption>
            <MenuItemOption value="melhores-avaliados">
              Melhores Avaliados
            </MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Filtrar por Gêneros" type="checkbox">
            {genres.map((genre) => {
              return (
                <MenuItemOption key={genre.id} value={genre.name.toLowerCase()}>
                  {genre.name}
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
}
