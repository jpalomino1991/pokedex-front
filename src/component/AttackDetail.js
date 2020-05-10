import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import * as Icon from 'react-bootstrap-icons'

class List extends Component {
    render() {
        return (
            <div>
                <Card bg="info" text="white" style={{ width: '28rem' }}>
                    <Card.Body>
                        <Form.Group>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Name</InputGroup.Text>
                                </InputGroup.Prepend>
                                <h1>Test</h1>
                            </InputGroup>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default List