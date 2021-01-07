import './App.css'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ShipDetails from './StarShipDetails/StarShipDetails'
import ShipList from '../StarshipList/StarshipList'

class App extends Component {
  state = { 
   }
  render() { 
    return ( 
      <div>
        <Route 
          exact path='/starship'
          render={({location}) => <ShipDetails location={location} />}
        />
        <Route 
          exact path='/shiplist'
          render={() => <ShipList />}
        />
      </div>
     );
  }
}
export default App;
