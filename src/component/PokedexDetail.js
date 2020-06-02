import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Bagde from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import TablePok from './TablePok'
import * as Icon from 'react-bootstrap-icons'
import Api from '../Api'
import { Link } from 'react-router-dom'

class PokedexDetail extends Component {
    state = { generalInfo: {}, attackList: { lv: [], egg: [], tm: [], tr: [] }, imgName: "" }
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
                <Card bg="white" text="black">
                    <Col xs={6} md={{span:4, offset:4}}>
                        <Image src={process.env.REACT_APP_IMAGE_URL + this.state.imgName + ".jpg"} thumbnail/>
                    </Col>
                    <Card.Header>
                        <h1>{this.state.generalInfo.Name}</h1>
                    </Card.Header>
                    <Card.Body>
                        <Tabs defaultActiveKey="info" id="tabs_info">
                            <Tab eventKey="info" title="General Info">
                                <br/>
                                <Bagde variant="primary">Type :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Type1}{this.state.generalInfo.Type2 === '' ? ("") : (" - " + this.state.generalInfo.Type2)}</Bagde><br/>
                                <Bagde variant="primary">Species :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Species}</Bagde><br/>
                                <Bagde variant="primary">Height - Weight :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Height}{' - '}{this.state.generalInfo.Weight}</Bagde><br/>
                                <Bagde variant="primary">Location :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Location}</Bagde><br/>
                                <Bagde variant="primary">Ability :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Ability_1}{this.state.generalInfo.Ability_2 === '' ? ("") : (" - " + this.state.generalInfo.Ability_2)}</Bagde><br/>
                                <Bagde variant="primary">Hidden Ability :</Bagde>{' '}<Bagde variant = "dark">{this.state.generalInfo.Hidden_Ability}</Bagde><br/>
                                <div>
                                    <Bagde variant="primary">Description :</Bagde>{' '}{this.state.generalInfo.SW_Desc}
                                </div>
                            </Tab>
                            <Tab eventKey="base" title="Base Stats">
                            <br/>
                                <Table borderless size="sm" style={{ fontSize: '12px' }}>
                                    <tbody>
                                        <tr>
                                            <td>HP</td>
                                            <td>{this.state.generalInfo.HP}</td>
                                            <td style={{ width: '80%' }}><ProgressBar now={this.state.generalInfo.HP} max="255"/></td>
                                            <td>{this.state.generalInfo.HP_Min}</td>
                                            <td>{this.state.generalInfo.HP_Max}</td>
                                        </tr>
                                        <tr>
                                            <td>Attack</td>
                                            <td>{this.state.generalInfo.Attack}</td>
                                            <td style={{ width: '80%' }}><ProgressBar variant="danger" now={this.state.generalInfo.Attack} max="190"/></td>
                                            <td>{this.state.generalInfo.Attack_Min}</td>
                                            <td>{this.state.generalInfo.Attack_Max}</td>
                                        </tr>
                                        <tr>
                                            <td>Defense</td>
                                            <td>{this.state.generalInfo.Defense}</td>
                                            <td style={{ width: '80%' }}><ProgressBar variant="danger" now={this.state.generalInfo.Defense} max="250"/></td>
                                            <td>{this.state.generalInfo.Defense_Min}</td>
                                            <td>{this.state.generalInfo.Defense_Max}</td>
                                        </tr>
                                        <tr>
                                            <td>Sp. Atk</td>
                                            <td>{this.state.generalInfo.Special_Attack}</td>
                                            <td style={{ width: '80%' }}><ProgressBar variant="warning" now={this.state.generalInfo.Special_Attack} max="194"/></td>
                                            <td>{this.state.generalInfo.Special_Attack_Min}</td>
                                            <td>{this.state.generalInfo.Special_Attack_Max}</td>
                                        </tr>
                                        <tr>
                                            <td>Sp. Def</td>
                                            <td>{this.state.generalInfo.Special_Defense}</td>
                                            <td style={{ width: '80%' }}><ProgressBar variant="warning" now={this.state.generalInfo.Special_Defense} max="250"/></td>
                                            <td>{this.state.generalInfo.Special_Defense_Min}</td>
                                            <td>{this.state.generalInfo.Special_Defense_Max}</td>
                                        </tr>
                                        <tr>
                                            <td>Speed</td>
                                            <td>{this.state.generalInfo.Speed}</td>
                                            <td style={{ width: '80%' }}><ProgressBar variant="danger" now={this.state.generalInfo.Speed} max="180"/></td>
                                            <td>{this.state.generalInfo.Speed_Min}</td>
                                            <td>{this.state.generalInfo.Speed_Max}</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>{parseInt(this.state.generalInfo.HP,10) + parseInt(this.state.generalInfo.Attack,10) + parseInt(this.state.generalInfo.Defense,10) + parseInt(this.state.generalInfo.Special_Attack,10) + parseInt(this.state.generalInfo.Special_Defense,10) + parseInt(this.state.generalInfo.Speed,10)}</td>
                                            <td></td>
                                            <td>Min</td>
                                            <td>Max</td>
                                        </tr>
                                    </tbody>                                                                
                                </Table>
                            </Tab>
                            <Tab eventKey="type" title="Type Defenses">
                            <br/>
                                <Table variant="dark" size="sm" style={{ fontSize: '12px' }}>
                                    <tbody>
                                        <tr>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/normal.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/fire.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/water.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/electric.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/grass.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/ice.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/fighting.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/poison.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/ground.gif" /></td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.generalInfo.Normal_Weakness}</td>
                                            <td>{this.state.generalInfo.Fire_Weakness}</td>
                                            <td>{this.state.generalInfo.Water_Weakness}</td>
                                            <td>{this.state.generalInfo.Electric_Weakness}</td>
                                            <td>{this.state.generalInfo.Grass_Weakness}</td>
                                            <td>{this.state.generalInfo.Ice_Weakness}</td>
                                            <td>{this.state.generalInfo.Fighting_Weakness}</td>
                                            <td>{this.state.generalInfo.Poison_Weakness}</td>
                                            <td>{this.state.generalInfo.Ground_Weakness}</td>
                                        </tr>
                                        <tr>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/flying.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/psychic.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/bug.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/rock.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/ghost.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/dragon.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/dark.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/steel.gif" /></td>
                                            <td><Image src="https://serebii.net/pokedex-bw/type/fairy.gif" /></td>
                                        </tr>
                                        <tr>
                                            <td>{this.state.generalInfo.Flying_Weakness}</td>
                                            <td>{this.state.generalInfo.Psychic_Weakness}</td>
                                            <td>{this.state.generalInfo.Bug_Weakness}</td>
                                            <td>{this.state.generalInfo.Rock_Weakness}</td>
                                            <td>{this.state.generalInfo.Ghost_Weakness}</td>
                                            <td>{this.state.generalInfo.Dragon_Weakness}</td>
                                            <td>{this.state.generalInfo.Dark_Weakness}</td>
                                            <td>{this.state.generalInfo.Steel_Weakness}</td>
                                            <td>{this.state.generalInfo.Fairy_Weakness}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>                        

                        <Tabs defaultActiveKey="lv" id="tabs">
                            <Tab eventKey="lv" title="Lv up">
                                <br/>
                                <TablePok tableInfo={this.state.attackList.lv} title="Lv"/>
                            </Tab>
                            <Tab eventKey="egg" title="Egg moves">
                            <br/>
                                <TablePok tableInfo={this.state.attackList.egg} title="Egg"/>
                            </Tab>
                            <Tab eventKey="tm" title="TM Moves">
                            <br/>
                                <TablePok tableInfo={this.state.attackList.tm} title="TM"/>
                            </Tab>
                            <Tab eventKey="tr" title="TR Moves">
                            <br/>
                                <TablePok tableInfo={this.state.attackList.tr} title="TR"/>
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default PokedexDetail