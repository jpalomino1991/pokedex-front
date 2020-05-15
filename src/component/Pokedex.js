import React, { Component } from 'react'
import List from './List'

class Pokedex extends Component {
    render() {
        return (
            <List title="Pokemon" apiList="api/pokemon/getNext" apiSearch="api/pokemon/search" linkTo="/pokedex/detail/"></List>
        )
    }
}

export default Pokedex