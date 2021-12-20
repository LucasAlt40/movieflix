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
                <MenuButton as={Button} colorScheme="blue">
                    Filtros
                </MenuButton>
                <MenuList minWidth="240px">
                    <MenuOptionGroup
                        defaultValue="asc"
                        title="Filtrar por..."
                        type="radio"
                    >
                        <LinkTo to={`/upcoming`}>
                            <MenuItemOption isChecked={filtro === "upcoming" ? true : false} value="upcoming">Próximos
                                a serem lançados</MenuItemOption>
                        </LinkTo>
                        <LinkTo to={`/popular`}>
                            <MenuItemOption isChecked={filtro === "popular" ? true : false}
                                            value="popular">Populares</MenuItemOption>
                        </LinkTo>
                        <LinkTo to={`/top_rated`}>
                            <MenuItemOption isChecked={filtro === "top_rated" ? true : false} value="top_rated">
                                Melhores Avaliados
                            </MenuItemOption>
                        </LinkTo>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </>
    );
}
