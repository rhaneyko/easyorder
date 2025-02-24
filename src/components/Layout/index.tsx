import React from "react";
import { Outlet } from "react-router-dom";
import { IsMobile } from "../../hooks/use-mobile";

import Header from "../Header";

import { Container } from "./styles";
import Sidebar from "../Sidebar";

const Layout = () => {
    return (
        <Container>
            {!IsMobile ? (
                <Sidebar />
            ) : (
                <Header />
            )}
            <Outlet />
        </Container>
    )
}

export default Layout;