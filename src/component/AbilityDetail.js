import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Bagde from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import Api from '../Api'
import { Link } from 'react-router-dom'

class AbilityDetail extends Component {
    state = { info: {} }
    componentDidMount () {
        let params = {
            id: this.props.match.params.id
        }
        Api.post("api/ability/getbyid",params)
            .then((response) => {
                this.setState({
                    info: response.data.data[0]
                })
            })
    }
    render() {
        return (
            <div>
                <Link to="/ability"><Button variant="light" style={{ display: 'block' }} ><Icon.ArrowLeft size={16} /></Button></Link>
                <Card bg="info" text="white" style={{ width: '50rem' }}>
                    <Card.Header>
                        {this.state.info.name}
                    </Card.Header>
                    <Card.Body>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Description</Bagde>{' '}<Bagde variant = "dark">{this.state.info.description}</Bagde><br/>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default AbilityDetail