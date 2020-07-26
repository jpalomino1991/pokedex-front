import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Bagde from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import Api from '../Api'
import { Link } from 'react-router-dom'

class AttackDetail extends Component {
    state = { info: {}, config: { headers: { Authorization: "Bearer " + localStorage.getItem("token") } } }
    componentDidMount () {
        let params = {
            id: this.props.match.params.id
        }
        Api.post("api/attack/getbyid",params, this.state.config)
            .then((response) => {
                this.setState({
                    info: response.data.data[0]
                })
            })
    }
    render() {
        return (
            <div>
                <Link to="/attack"><Button variant="light" style={{ display: 'block' }} ><Icon.ArrowLeft size={16} /></Button></Link>
                <Card bg="info" text="white" style={{ width: '50rem' }}>
                    <Card.Header>
                        {this.state.info.name}
                    </Card.Header>
                    <Card.Body>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Type</Bagde>{' '}<Bagde variant = "dark">{this.state.info.type}</Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Category</Bagde>{' '}<Bagde variant = "dark"><img src={this.state.info.category} alt="logo"/></Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Power</Bagde>{' '}<Bagde variant = "dark">{this.state.info.power}</Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Accuracy</Bagde>{' '}<Bagde variant = "dark">{this.state.info.accuracy}</Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>PP</Bagde>{' '}<Bagde variant = "dark">{this.state.info.pp}</Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>TM</Bagde>{' '}<Bagde variant = "dark">{this.state.info.tm}</Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Effect</Bagde>{' '}<Bagde variant = "dark">{this.state.info.effect}</Bagde><br/>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default AttackDetail