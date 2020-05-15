import React, { Component } from 'react'
import List from './List'

class Ability extends Component {
    render() {
        return (
            <List title="Ability" apiList="api/ability/getNext" apiSearch="api/ability/search" linkTo="/ability/detail/"></List>
        )
    }
}

export default Ability