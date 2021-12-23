import React from "react";
import ReactPaginate from "react-paginate";
import {Button} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";

import "./style.css";

export default function Pagination(props) {

    const { pageCount, onPageChange } = props;

    return(
        <div className="pagination">
            <ReactPaginate
                pageRangeDisplayed={5}
                previousLabel={
                    <Button bg="#AF0404" leftIcon={<ArrowBackIcon/>}>
                        Anterior
                    </Button>
                }
                nextLabel={
                    <Button bg="#AF0404" rightIcon={<ArrowForwardIcon/>}>
                        Próxima
                    </Button>
                }
                pageCount={pageCount}
                onPageChange={onPageChange}
                containerClassName={"paginationButtons"}
                previousLinkClassName={"previousButton"}
                nextClassName={"nextButton"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                forcePage={0}
            />
        </div>
    );
}