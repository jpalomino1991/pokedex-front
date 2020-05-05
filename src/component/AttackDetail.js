import React, { Component } from 'react'
import { Link } from '@reach/router'
import Card from 'react-bootstrap/Card'
import * as Icon from 'react-bootstrap-icons'

class List extends Component {
    render() {
        return (
            <div>
                <Card bg="info" text="white" style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.attack.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default List