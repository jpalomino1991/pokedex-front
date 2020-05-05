import React, { Component } from 'react'
import { Link } from '@reach/router'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import * as Icon from 'react-bootstrap-icons'
import Api from '../Api'

class List extends Component {
    state = { all: [], count: 0, isLoading: false, inSearch: false }
    componentDidMount() {
        let params = {
            count: this.state.count
        }
        Api.post(this.props.apiList,params)
            .then((response) => {
                this.setState({
                    all: response.data.data,
                    count: this.state.count + 1
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
            Api.post(this.props.apiSearch,params)
                .then((response) => {
                    this.setState({
                        all: response.data.data
                    })
                })
        }
        else
            this.setState({
                inSearch: false,
                all: []
            })
    }
    getNext = () => {
        this.setState({
            isLoading: true
        })
        let params = {
            count : this.state.count
        }
        Api.post(this.props.apiList,params).then((response) => {
            if(response.data)
                this.setState({
                    all: this.state.all.concat(response.data.data),
                    count: this.state.count + 1
                })
            this.setState({
                isLoading: false
            })
        })
    }
    getDetail = (item) => {
        console.log(item)
    }
    render() {
        return (
            <div>                
                <Form>
                    <Form.Group md="4" controlId="validationCustomUsername">
                    <InputGroup>
                    <Link to="/"><Button variant="light" style={{ display: 'block' }} ><Icon.House size={16} /></Button></Link>
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
                        <Card.Header>List of { this.props.title }</Card.Header>
                    </Card>
                {this.state.all.map((item, key) => {
                    return (
                    <Card bg="primary" key={key} text="white" style={{ width: '28rem' }} onClick={() => this.getDetail(item)}>
                        <Card.Header>{item.name}</Card.Header>
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

export default List