import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

//importcomponents
import { logUser, logUserOut } from '../Api';
import {SessionProvider, SessionContext} from '../providers/SessionProvider';


export default class NavBar extends Component{
  constructor(props, context){
    super(props, context);

    this.onChangeEmailAdress = this.onChangeEmailAdress.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = {
      emailAdress: "",
      password: ""
    }
  }

  onChangeEmailAdress(input) {
    this.setState({
      emailAdress: input.target.value
    })
  }

  onChangePassword(input) {
    this.setState({
      password: input.target.value
    })
  }

  async onSubmit(data) {
    data.preventDefault();
    // retrieve data from the form
    let obj = {
      "email": this.state.emailAdress,
      "password": this.state.password
    };
    // await api request
    let token = await logUser(obj);
    // toggle the navbar content & send the access_token
    if(token!==null){this.context.toggleLogIn(token.data.access_token)}
  }


  async logOut(){
    // reset the login data from this.state
    this.setState({
      emailAdress: "",
      password: ""
    })
    // log out from the database
    await logUserOut(this.context.state.token)
    // toggle the navbar content
    this.context.toggleLogOut()

  }

  render() {
    return (
      <>
        <Navbar id="navbar">
        <Navbar.Brand>
          <Link to={"/"}>
            <div className="navbar-brand">
              <h1>Event Food</h1>
            </div>
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to={"/"}>
            <Button className="navButton" variant="#207A8E">Home</Button>
          </Link>
          <Nav className="mr-auto">
            <Link to={"/event-history"}>
              <Button className="navButton" variant="#207A8E">Past Events</Button>
            </Link>
          </Nav>
        </Nav>
            <div>
              {(this.context.state.logIn === false ) ?
                <Form inline>
                  <FormControl type="text" placeholder="Email" className=" mr-sm-2" onChange={this.onChangeEmailAdress}/>
                  <FormControl type="password" placeholder="Password" className=" mr-sm-2" onChange={this.onChangePassword}/>
                  <Button className="navButton" variant="#207A8E" type="submit" onClick={this.onSubmit}>Login</Button>
                  <Link to={"/user-register"}>
                    <Button className="navButton" variant="#207A8E">Register</Button>
                  </Link>
                </Form>
               :
               <Nav className="mr-auto">
                 <Link to={"/event-create"}>
                   <Button className="navButton" variant="#207A8E">Create Event</Button>
                 </Link>
                  <Col>
                    <Row><h5>Greetings </h5></Row>
                    <Row>{this.context.state.session.pseudo}</Row>
                  </Col>
                  <Button className="navButton" variant="#207A8E" onClick={this.logOut}>Log out</Button>
                </Nav>
              }
            </div>

        </Navbar>
      </>
    )
  }
}

NavBar.contextType=SessionContext
