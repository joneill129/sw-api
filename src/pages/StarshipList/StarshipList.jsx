import React, { Component } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

class ShipList extends Component {
  state = {
    results: [],
  };
  async componentDidMount() {
    const shipData = await getAllStarships();
    this.setState({ results: shipData.results });
  }
  render() {
    return (
      <>
        <div className="title">
          <h1>STAR WARS STARSHIPS</h1>
        </div>
        <div className="container">
          {this.state.results.map((starship) => (
            <div className="starships">
              <Link
                className="links"
                to={{
                  pathname: "/shipdetails",
                  state: { starship },
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
