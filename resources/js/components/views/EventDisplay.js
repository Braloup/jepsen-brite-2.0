import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer'
import {SessionProvider, SessionContext} from '../providers/SessionProvider';

export default class EventDisplay extends Component {
  render() {
    return(
      <>
        <div className="container py-3">
          <Card id="text-center" style={{ width: '100%', background: "#D6E5E3", border:"solid 1.50px #40C0DD" }}>
            <Card.Header>
              <Card.Img src="https://via.placeholder.com/1070x602" />
                <h2 className="mt-3">{this.props.package.name}</h2>
                <h3><Moment format="DD MMM YYYY - H:mm">{this.props.package.date}</Moment></h3>
              </Card.Header>
            <Card.Body>
              <Card.Text >{this.props.package.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
          {(this.context.state.logIn === false ) ?
                <div>Log in to register to this event.</div>
            :
              <Col>
                <Row>
                  <Button style={{background:"#207A8E", border:"solid 1.50px #40C0DD"}} onClick={this.props.optInEvent}>I want to participate</Button>
                </Row>
                <Row>
                  <Button variant="danger" onClick={this.props.optOutEvent}>I no longer want to come</Button>
                </Row>
              </Col>
            }
            {(this.context.state.session.id === this.props.package.author) ?
              <Col>
                <Row>
                  <Form>
                    <Link to={"/event-edit-"+this.props.package.id}>
                      <Button id="buttonevent" style={{background:"#207A8E", border:"solid 1.50px #40C0DD"}}>Edit</Button>
                    </Link>
                  </Form>
                </Row>
                <Row>
                  <div><ConfirmModalContainer
                    variant="danger"
                    label="Erase"
                    message="Do you want to delete this event ?"
                    onClick={this.props.onClick}/>
                  </div>
                </Row>
              </Col>
              :
              <div>You're not the author, you can't access edit or delete functionnalities</div>
            }
            </Card.Footer>
          </Card>
        </div>
        <div className="row">
          {this.props.participants.map(participant =>
          <div className="card col-4" key={Math.random()}>
          <div className="card-body" style={{border:"solid 1.50px #40C0DD"}}>
            <h5 className="card-title">{participant.pseudo}</h5>
            <h6 className="card-subtitle mb-2 text-muted"></h6>
          </div>
        </div>

          )}
        </div>
      </>
    )
  }
}

EventDisplay.contextType=SessionContext
