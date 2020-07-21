import React, { Component } from "react"
import { Container, Form, Col } from "react-bootstrap"
import { withAuth0 } from "@auth0/auth0-react"

class Profile extends Component{
    render() {
        const { user } = this.props.auth0
        return (
            <Container className="mb-5">
            <Form.Row>
                <Col md={2}>
                    <img
                        src={user.picture}
                        alt="Profile"
                        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                    />
                </Col>
                <Col md>
                    <h2>{user.name}</h2>
                    <p className="lead text-muted">{user.email}</p>
                </Col>
            </Form.Row>
            </Container>
        )
    }
}

export default withAuth0(Profile)
