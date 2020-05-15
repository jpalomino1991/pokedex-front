import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Bagde from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import Api from '../Api'
import { Link } from 'react-router-dom'

class PokedexDetail extends Component {
    state = { info: {} }
    componentDidMount () {
        let params = {
            id: this.props.match.params.id
        }
        Api.post("api/pokemon/getbyid",params)
            .then((response) => {
                this.setState({
                    info: response.data.data[0]
                })
                console.log(this.state.info)
            })
    }
    render() {
        return (
            <div>
                <Link to="/pokedex"><Button variant="light" style={{ display: 'block' }} ><Icon.ArrowLeft size={16} /></Button></Link>
                <Card bg="info" text="white" style={{ width: '80rem' }}>
                    <Card.Header>
                        {this.state.info.name}
                    </Card.Header>
                    <Card.Body>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Type</Bagde>{' '}<Bagde variant = "dark">{this.state.info.type1}{' - '}{this.state.info.type2}</Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Species</Bagde>{' '}<Bagde variant = "dark"><img src={this.state.info.species} alt="logo"/></Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Height - Weight</Bagde>{' '}<Bagde variant = "dark">{this.state.info.height}{' - '}{this.state.info.height}</Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Location</Bagde>{' '}<Bagde variant = "dark">{this.state.info.location}</Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>SW Description</Bagde>{' '}<Bagde variant = "dark">{this.state.info['SW Desc']}</Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Ability</Bagde>{' '}<Bagde variant = "dark">{this.state.info.ability1}{' - '}{this.state.info.ability2}</Bagde><br/>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/>Hidden Ability</Bagde>{' '}<Bagde variant = "dark">{this.state.info.hiddenAbility}</Bagde><br/>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default PokedexDetail