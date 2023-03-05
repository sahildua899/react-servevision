import React, { Fragment } from 'react';
import './navigation.styles.scss';
import {Container, Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo.png';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} className='website-logo' alt='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* About Us */}
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mission & Vision</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Team
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Why Work with us</NavDropdown.Item>
            </NavDropdown>
            {/* Services */}
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/service/guestpost">Guest Post</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/outreach">Outreach</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/seo">SEO</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/ppc">PPC</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/smm">SMM</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/musicpromotion">Music Promotion</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/website">Website Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/videomarketing">Video Marketing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service/contentmarketing">Content Marketing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Case Studies</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
          </Nav>
          <Navbar.Text>
          Need Help? Talk to an Expert<br /><a href="tel:9053070530">+91-9053070530</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </Fragment>
  )
}

export default Navigation;