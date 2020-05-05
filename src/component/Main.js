import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from '@reach/router'
import * as Icon from 'react-bootstrap-icons'

export default function Main() {
    return (
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
        </div>
    )
}