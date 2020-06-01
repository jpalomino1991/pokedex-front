import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Bagde from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import * as Icon from 'react-bootstrap-icons'
import Api from '../Api'
import { Link } from 'react-router-dom'

class PokedexDetail extends Component {
    state = { generalInfo: {}, attackList: { lv: [], egg: [], tm: [], tr: [] }, baseUrl : "https://img.pokemondb.net/artwork/", imgName: "" }
    componentDidMount () {
        let params = {
            id: this.props.match.params.id
        }
        Api.post("api/pokemon/getbyid",params)
            .then((response) => {
                this.setState({
                    generalInfo: response.data.data[0]
                })
                params = {
                    search: this.state.generalInfo.Name
                }
                Api.post("api/pokemonAttack/search",params)
                    .then((response) => {
                        this.setState({
                            attackList: response.data.data,
                            imgName: this.state.generalInfo.Name.toLowerCase()
                        })
                        console.log(this.state.attackList)
                    })
            })
    }
    render() {
        return (
            <div>
                <Link to="/pokedex"><Button variant="light" style={{ display: 'block' }} ><Icon.ArrowLeft size={16} /></Button></Link>
                <Card bg="white" text="black" >
                    <Card.Img variant="top" src={this.state.baseUrl + this.state.imgName + ".jpg"}></Card.Img>
                    <Card.Header>
                        <h1>{this.state.generalInfo.Name}</h1>
                    </Card.Header>
                    <Card.Body>
                        <Bagde variant="primary">Type :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Type1}{this.state.generalInfo.Type2 === '' ? ("") : (" - " + this.state.generalInfo.Type2)}</Bagde><br/>
                        <Bagde variant="primary">Species :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Species}</Bagde><br/>
                        <Bagde variant="primary">Height - Weight :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Height}{' - '}{this.state.generalInfo.Weight}</Bagde><br/>
                        <Bagde variant="primary">Location :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Location}</Bagde><br/>
                        <Bagde variant="primary">Ability :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Ability_1}{this.state.generalInfo.Ability_2 === '' ? ("") : (" - " + this.state.generalInfo.Ability_2)}</Bagde><br/>
                        <Bagde variant="primary">Hidden Ability :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Hidden_Ability}</Bagde><br/>
                        <Bagde variant="primary">Description :</Bagde>
                        <Card.Title>
                            {' '}{this.state.generalInfo.SW_Desc}
                        </Card.Title>
                        <Tabs defaultActiveKey="lv" id="tabs">
                            <Tab eventKey="lv" title="Lv up">
                                <br/>
                                <Table responsive variant="dark" size="sm" style={{ fontSize: '12px' }}>
                                    <thead>
                                        <tr>
                                            <th>Lv</th>
                                            <th>Move</th>
                                            <th>Type</th>
                                            <th>Category</th>
                                            <th>Power</th>
                                            <th>Accuracy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.attackList.lv.map((item, key) => {
                                        return (
                                            <tr>
                                                <td>{item.Lv}</td>
                                                <td>{item.Move}</td>
                                                <td>{item.Type}</td>
                                                <td><img src ={item.Category} alt="category" /></td>
                                                <td>{item.Power}</td>
                                                <td>{item.Accuracy}</td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="egg" title="Egg moves">
                            <br/>
                                <Table responsive variant="dark" size="sm" style={{ fontSize: '12px' }}>
                                    <thead>
                                        <tr>
                                            <th>Move</th>
                                            <th>Type</th>
                                            <th>Category</th>
                                            <th>Power</th>
                                            <th>Accuracy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.attackList.egg.map((item, key) => {
                                        return (
                                            <tr>
                                                <td>{item.Move}</td>
                                                <td>{item.Type}</td>
                                                <td><img src ={item.Category} alt="category" /></td>
                                                <td>{item.Power}</td>
                                                <td>{item.Accuracy}</td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="tm" title="TM Moves">
                            <br/>
                                <Table responsive variant="dark" size="sm" style={{ fontSize: '12px' }}>
                                    <thead>
                                        <tr>
                                            <th>TM</th>
                                            <th>Move</th>
                                            <th>Type</th>
                                            <th>Category</th>
                                            <th>Power</th>
                                            <th>Accuracy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.attackList.tm.map((item, key) => {
                                        return (
                                            <tr>
                                                <td>{item.TM}</td>
                                                <td>{item.Move}</td>
                                                <td>{item.Type}</td>
                                                <td><img src ={item.Category} alt="category" /></td>
                                                <td>{item.Power}</td>
                                                <td>{item.Accuracy}</td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="tr" title="TR Moves">
                            <br/>
                                <Table responsive variant="dark" size="sm" style={{ fontSize: '12px' }}>
                                    <thead>
                                        <tr>
                                            <th>Tr</th>
                                            <th>Move</th>
                                            <th>Type</th>
                                            <th>Category</th>
                                            <th>Power</th>
                                            <th>Accuracy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.attackList.tr.map((item, key) => {
                                        return (
                                            <tr>
                                                <td>{item.TR}</td>
                                                <td>{item.Move}</td>
                                                <td>{item.Type}</td>
                                                <td><img src ={item.Category} alt="category" /></td>
                                                <td>{item.Power}</td>
                                                <td>{item.Accuracy}</td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default PokedexDetail