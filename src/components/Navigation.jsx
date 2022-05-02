import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = ({ totalCounters }) => {
    return (
        <Navbar bg="light">
            <Nav.Link href="#home">Navbar {totalCounters}</Nav.Link>
        </Navbar>
    );
};

export default Navigation;
