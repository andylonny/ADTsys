import React from 'react'
import './styles.css'
import { Navbar } from 'react-bootstrap';

const Header = () =>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">ADTsys - Pokémon Weather Test</Navbar.Brand>
    </Navbar>

export default Header