/* eslint-disable */
import React, { useState, useEffect } from "react";

import { Link as LinkTo } from "react-router-dom";

import {
  Button,
  Input,
  Box,
  Divider,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Drawer,
} from "@chakra-ui/react";
import { ExternalLinkIcon, SearchIcon } from "@chakra-ui/icons";

import getData from "../../functions/getData";

export default function Search() {
  const [valueSearch, setValueSearch] = useState("");
  const [result, setResult] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleChange = (e) => {
    setValueSearch(e.target.value);
  };

  const apiKey = process.env.REACT_APP_API_KEY;

  async function fetchSearch() {
    const response = await getData(
      `/search/movie?api_key=${apiKey}&language=pt-BR&query=${valueSearch}`
    );
    setResult(response.results);
  }

  useEffect(() => {
    if (valueSearch) {
      fetchSearch();
    }
  }, [valueSearch]);

  return (
    <>
      <Button ref={btnRef} style={{color: "#FFF"}} bg="#414141" onClick={onOpen}>
        <SearchIcon /> Procurar
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#222831" color="white">
          <DrawerCloseButton color="red" />
          <DrawerHeader>Pesquisar Filme</DrawerHeader>

          <DrawerBody>
            <Input onChange={handleChange} placeholder={`Nome do filme`} />
            {valueSearch === null || undefined || ""
              ? valueSearch
              : result.map((res) => {
                  if (!valueSearch) {
                  } else {
                    return (
                      <Box
                        bg="#393E46"
                        w="100%"
                        key={res?.id}
                        p={4}
                        color="white"
                      >
                        <LinkTo
                          color="#00ADB5"
                          to={`/Details/${res.title}/${res.id}`}
                        >
                          {res?.title} <ExternalLinkIcon mx="2px" />
                        </LinkTo>
                        <Divider colorScheme="black" />
                      </Box>
                    );
                  }
                })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
