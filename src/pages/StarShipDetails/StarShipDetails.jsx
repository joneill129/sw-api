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
        {shipDetails.name ? (
          <>
            <h1>Details</h1>
            <h2>Name: {shipDetails.name}</h2>
            <h2>Model: {shipDetails.model}</h2>
            <div>
              <Link
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
