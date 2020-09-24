import React from 'react';
import { Container, Nav} from 'react-bootstrap';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import {Link} from 'react-router-dom';
import Main from './pages/main'

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
      <Header className="header-color">
            <Nav className="navbar  custom-navbar">
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">Menu 1</Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/pg1">Menu 2</Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/pg2">Menu 3</Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/pg3">Menu 4</Link>
            </Nav>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
    </div>
  </footer>
      </Container>
    </div>
  );
}

export default App;
