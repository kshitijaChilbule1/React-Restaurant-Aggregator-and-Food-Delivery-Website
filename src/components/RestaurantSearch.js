import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      lastSearch: "",
    };
  }
  search(key) {
    console.warn(key);
    this.setState({ lastSearch: key });
    fetch(
      "https://my-json-server.typicode.com/kshitijaChilbule1/demo/restaurant?q=" +
        key
    ).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          this.setState({ searchData: resp, noData: false });
        } else {
          this.setState({ noData: true, searchData: null });
        }
      });
    });
  }
  delete(id) {
    fetch(
      "https://my-json-server.typicode.com/kshitijaChilbule1/demo/restaurant" +
        id,
      {
        method: "DELETE",
        // headers:{
        //     'Content-Type':'application/json'
        // },
      }
    ).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has heen Delete");
        this.search(this.state.lastSearch);
      });
    });
  }
  render() {
    return (
      <Container>
        <Form.Control
          type="text"
          onChange={(event) => this.search(event.target.value)}
          placeholder="Search restaurant"
        />
        <div>
          {this.state.searchData ? (
            <div>
                  {this.state.searchData.map((product) => (
                    <div className='card' key={product.id}>
                    <h3>{product.name}</h3>
                <p>{product.rating}</p>
                <p>{product.email}</p>
                <p>{product.address}</p>
                    <Link to={`/product/${product.id}`}>View</Link>
                  </div>
                  ))}
            </div>
          ) : (
            ""
          )}
          {this.state.noData ? <h3>No Data Found</h3> : null}
        </div>
      </Container>
    );
  }
}

export default RestaurantSearch;
