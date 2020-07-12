import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Pokedex</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Abilities</Nav.Link>
            <Nav.Link href="#features">Attack</Nav.Link>
            <Nav.Link href="#pricing">Pokemon</Nav.Link>
        </Nav>
        <Form inline>
        {!isLoading && !user && (
                <Button onClick={loginWithRedirect} variant="light">
                  Login
                </Button>
              )}

        {!isLoading && user && (
        <>
            <Form.Control type="text" placeholder={user.name} readOnly />
            <Button onClick={() => logout({ returnTo: window.location.origin })} variant="light">
                Logout
            </Button>
        </>
        )}
        </Form>
    </Navbar>
  );
}