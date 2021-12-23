/* eslint-disable */
import React from "react";

import {Link as LinkTo, useParams} from "react-router-dom"

import {
    Menu,
    MenuButton,
    MenuList,
    Button,
    MenuOptionGroup,
    MenuItemOption,
} from "@chakra-ui/react";

export default function Filter() {

    const { filtro } = useParams();
    
    return (
        <>
            <Menu closeOnSelect={false}>
                <MenuButton as={Button} style={{color: "#000"}} bg="#FFF">
                    Filtros
                </MenuButton>
                <MenuList minWidth="240px">
                    <MenuOptionGroup
                        defaultValue="asc"
                        title="Filtrar por..."
                        type="radio"
                    >
                        <LinkTo to={`/upcoming`}>
                            <MenuItemOption isChecked={filtro === "upcoming"} value="upcoming">Próximos
                                a serem lançados</MenuItemOption>
                        </LinkTo>
                        <LinkTo to={`/popular`}>
                            <MenuItemOption isChecked={filtro === "popular"}
                                            value="popular">Em alta</MenuItemOption>
                        </LinkTo>
                        <LinkTo to={`/top_rated`}>
                            <MenuItemOption isChecked={filtro === "top_rated"} value="top_rated">
                                Favoritos pela crítica
                            </MenuItemOption>
                        </LinkTo>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </>
    );
}
