import React, { Component } from 'react';
import {getAllStarships} from '../../services/sw-api';
import {Link} from 'react-router-dom';

class ShipList extends Component {
  state = { 
    results: []
   }
  async componentDidMount(){
    const shipData = await getAllStarships()
    this.setState({ results: shipData.results })
  }
  render() { 
    return ( 
      <div>
        <h1>This is the Ship List Page</h1>
        {this.state.results.map((starship) => (
          <div>
            <Link
              to={{
                pathname: `/starship`,
                state: {starship}
              }}
            >
            {starship.name}
            </Link>
          </div>
        ))}
      </div>
     );
  }
}
export default ShipList;