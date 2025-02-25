import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";

import { Container } from "./styles";

const Layout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    )
}

export default Layout;