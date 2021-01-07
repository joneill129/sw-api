import React, { Component } from 'react'
import { getAllStarships } from '../../services/sw-api';
// import {getAllStarships} from '../services/sw-api'

class ShipDetails extends Component {
    state = {
        url: this.props.location.state.starships.url,
        shipDetails: {}
    }

    // async componentDidMount() {
    //     const shipDetails = await getAllStarships(this.state.ur)
    // }

    render() { 
        return (
            <h1>Details</h1>
        );
    }
}
 
export default ShipDetails;





