import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Bagde from 'react-bootstrap/Badge'
import * as Icon from 'react-bootstrap-icons'

class AttackDetail extends Component {
    componentDidMount () {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <Card bg="info" text="white" style={{ width: '28rem' }}>
                    <Card.Body>
                        <Bagde variant="primary"><Icon.InfoCircleFill size={16}/> Title</Bagde>{' '}<Bagde variant = "dark">Description</Bagde><br/>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default AttackDetail