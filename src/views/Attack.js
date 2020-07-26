import React, { Component } from 'react'
import List from '../component/List'

class Attack extends Component {
    render() {
        return (
            <List title="Attack" apiList="api/attack/getNext" apiSearch="api/attack/search" linkTo="/attack/detail/"></List>
        )
    }
}

export default Attack