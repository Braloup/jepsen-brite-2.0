import React, { Component } from 'react';

//import components
import EventDisplay from './views/EventDisplay';
import { getOneEvent, deleteEvent } from './Api';

export default class EventDisplayContainer extends Component {
  constructor (props) {
    super (props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      event: []
    }
  }

  handleDelete() {
    deleteEvent(this.state.event.id)
    this.props.history.push('/')
  }

  async componentDidMount() {
      const event = await getOneEvent(this.props.match.params.id);
      console.log("api", event);
      this.setState({
       event: event
     })
     console.log("container", this.state.event);
   }

  render() {
    return(
    <EventDisplay package={this.state.event.event} onClick={this.handleDelete}/>

    )
  }
}
