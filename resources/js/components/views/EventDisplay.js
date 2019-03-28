import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class EventDisplay extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p>Event description</p>
          <Link to={"/"}>
            <Button variant="secondary">Return</Button>
          </Link>
          <Link to={"/event-edit"}>
            <Button variant="secondary">Edit Event</Button>
          </Link>
          <div><Button variant="danger">Erase</Button></div>
          
        </div>
      </React.Fragment>
    )
  }
}
