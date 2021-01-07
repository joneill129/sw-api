import './App.css'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ShipDetails from '../StarShipDetails/StarShipDetails'
import ShipList from '../StarshipList/StarshipList'

class App extends Component {
  state = { 
    starships: [
      {url: '/shipdetails'}
    ]
   }
  render() { 
    return ( 
      <div className="links">
        <Route 
          exact path='/'
          render={({location}) => <ShipList location={location} />}
        />
        <Route 
          exact path='/shipdetails'
          render={({location}) => <ShipDetails location={location} />}
        />
      </div>
     );
  }
}
export default App;
