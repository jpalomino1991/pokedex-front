import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
import Api from '../Api'
import { useAuth0 } from "@auth0/auth0-react"

export default function Main() {
  const {
    isAuthenticated,user
  } = useAuth0()
  if(isAuthenticated)
  {
    let params = {
      email: user.email
    }
    Api.post("api/auth/login",params)
      .then((response) => {
        localStorage.setItem("token",response.data.accessToken)
      })
  }    
    return (
      <>
        {!isAuthenticated && (
          <>
            <Alert key="primary" variant="primary">
              Welcome to the Pokedex App!
            </Alert>
            <Alert key="dark" variant="dark">
              This is a simple app created to view basic information of Pokemon. Please Enjoy!
            </Alert>
          </>
        )}
        {isAuthenticated && (
        <div>
          <Link to="/attack">
            <Card bg="primary" text="white" style={{ width: '20rem' }}>
                <Card.Header><Icon.ChevronBarContract style={{ margin: '0 20 0 0' }}/>Attack</Card.Header>
            </Card>
          </Link>
          <Link to="/ability">
            <Card bg="danger" text="white" style={{ width: '20rem' }}>
                <Card.Header><Icon.Gem style={{ margin: '0 20 0 0' }}/>Abilities</Card.Header>
            </Card>
          </Link>
          <Link to="/pokedex">
            <Card bg="dark" text="light" style={{ width: '20rem' }}>
                <Card.Header><Icon.InboxesFill style={{ margin: '0 20 0 0' }}/>Pokemon</Card.Header>
            </Card>
          </Link>
        </div>)}
        </>
    )
}