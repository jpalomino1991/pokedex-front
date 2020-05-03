import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import * as Icon from 'react-bootstrap-icons'

class Attack extends Component {
    state = { allAttack: [], count: 1, isLoading: false, inSearch: false }
    componentDidMount() {
        axios.get('http://localhost:4000/api/attack/getFirst')
            .then((response) => {
                console.log(response.data.data);
                this.setState({
                    allAttack: response.data.data
                })
            });
    }
    inputChange = (event) => {
        if(event.target.value.length >= 2)
        {
            this.setState({
                inSearch: true,
                count: 0
            })
            let params = {
                search: event.target.value
            }
            axios.post('http://localhost:4000/api/attack/search',params)
                .then((response) => {
                    this.setState({
                        allAttack: response.data.data
                    })
                })
        }
        else
            this.setState({
                inSearch: false,
                allAttack: []
            })
    }
    getNext = () => {
        this.setState({
            isLoading: true
        })
        let params = {
            count : this.state.count
        }
        axios.post('http://localhost:4000/api/attack/getNext',params).then((response) => {
            if(response.data)
                this.setState({
                    allAttack: this.state.allAttack.concat(response.data.data),
                    count: this.state.count + 1
                })
            this.setState({
                isLoading: false
            })
        })
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group md="4" controlId="validationCustomUsername">
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend"><Icon.Search /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        aria-describedby="inputGroupPrepend"
                        required
                        onChange = { this.inputChange }
                        />
                    </InputGroup>
                    </Form.Group>
                </Form>
                <Card bg="success" text="white" style={{ width: '28rem' }}>
                        <Card.Header>List of Attacks</Card.Header>
                    </Card>
                {this.state.allAttack.map((attack, key) => {
                    return (
                    <Card bg="primary" key={key} text="white" style={{ width: '28rem' }}>
                        <Card.Header>{attack.name}</Card.Header>
                    </Card>
                    )
                })}
                {!this.state.inSearch ? (
                <Button variant="info" disabled={this.state.isLoading} onClick={!this.state.isLoading ? this.getNext : null}>
                    {this.state.isLoading ? 'Loading…' : 'Load More'}
                </Button>) : ("")}
            </div>
        )
    }
}

export default Attack