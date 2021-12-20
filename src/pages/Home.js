import React from "react";
import Catalog from "../components/Catalog";
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main style={{width: "100%", height: "100%", margin: "0", padding: "0", background: "#323232"}}>
                <Catalog/>
            </main>
        </>
    );
}
