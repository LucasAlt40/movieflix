import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function BackButton() {
    const navigate = useNavigate();

    return(
        <Button leftIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>Voltar</Button>
    );
}