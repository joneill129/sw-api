import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShipDetails extends Component {
  state = {
    shipDetails: this.props.location.state.starship,
  };

  render() {
    const { shipDetails } = this.state;
    return (
      <>
        <div className="title">
          <h1>Details</h1>
          </div>
        {shipDetails.name ? (
          <>
          
          <div className='starshipDetails'>
            <h3>Name: {shipDetails.name}</h3>
            <h3>Model: {shipDetails.model}</h3>
              <Link className='return-link'
                to={{
                  pathname: "/",
                }}
              >
                <p>RETURN</p>
              </Link>
              </div>
           
          </>
        ) : (
          <>
            <p>Loading...</p>
          </>
        )}
      </>
    );
  }
}

export default ShipDetails;
