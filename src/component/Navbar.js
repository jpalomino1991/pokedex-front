import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import * as Icon from 'react-bootstrap-icons'
import {
    Button,
    Container,
    Dropdown,
    Navbar,
    Nav
} from "react-bootstrap"

const NavBar = () => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0()

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className="nav-container">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Pokedex App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" defaultActiveKey="#home">
                <Nav.Item>
                    <Nav.Link href="/"><Icon.House/>{' '}Home</Nav.Link>
                </Nav.Item>
                {isAuthenticated && (
                <>
                <Nav.Item>
                    <Nav.Link href="/ability"><Icon.Gem/>{' '}Abilities</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/attack"><Icon.Lightning/>{' '}Attack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/pokedex"><Icon.InboxesFill/>{' '}Pokemon</Nav.Link>
                </Nav.Item>
                </>)}
            </Nav>
            <Nav>
                {!isAuthenticated && (
                <Nav.Item>
                    <Button variant="danger" onClick={() => loginWithRedirect()}>
                        Log in
                    </Button>
                </Nav.Item>)}
                {isAuthenticated && (
                <Nav.Item>
                    <Dropdown>
                        <Dropdown.Toggle nav caret id="profileDropDown">
                            <img
                                src={user.picture}
                                alt="Profile"
                                className="nav-user-profile rounded-circle"
                                width="30"
                            />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">{user.name}</Dropdown.Item>
                            <Dropdown.Item href="/profile"><Icon.PersonFill/>{' '}Profile</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={() => logoutWithRedirect()}><Icon.Power/>{' '}Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>)}
            </Nav>  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
