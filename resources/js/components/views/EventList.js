import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class EventList extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p>Event list</p>
          <Link to={"/event-create"}>
          <Button variant="secondary">Create Event</Button>
          </Link>
          <Link to={"/event-display"}>
          <Button variant="secondary">More info</Button>
          </Link>
          <Link to={"/event-history"}>
          <Button variant="secondary">Past Events</Button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}
