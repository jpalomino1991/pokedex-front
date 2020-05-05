import React, { Component } from 'react'
import List from './List'

class Attack extends Component {
    render() {
        return (
            <List title="Attack" apiList="api/attack/getNext" apiSearch="api/attack/search"></List>
        )
    }
}

export default Attack