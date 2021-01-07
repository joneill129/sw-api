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
      <>
      <h1>This is the Ship List Page</h1>
      <div className="container">
        {this.state.results.map((starship) => (
          <div className="starships">
            <Link
              to={{
                pathname: '/shipdetails',
                state: {starship}
              }}
            >
            {starship.name}
            </Link>
          </div>
        ))}
      </div>
      </>
     );
  }
}

export default ShipList;