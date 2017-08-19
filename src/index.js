import React, { Component } from 'react';
import { render } from 'react-dom';
import Rx from 'rx-js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/main';
import AboutUs from './pages/aboutus';
import Contacts from './pages/contacts';

const StyledMenu = styled.ul`
  font-family: 'Lato', sans-serif;  
  display: flex;
  font-size: 14px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  li {
    flex-grow: 1;
    text-align: center;
    :last-child {
      border-right: none;
    }
    a {
      display: block;
      padding: 8px 0;
      color: #333;
      text-decoration: none;
      :hover {
        background-color: #eee;
      }
    }
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/aboutus">About us</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </StyledMenu>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <Route render={({location}) => (
          <div>
            <Menu/>
            <Route exact path="/" component={Main} location={location}></Route>
            <Route path="/aboutus" component={AboutUs} location={location}></Route>
            <Route path="/contacts" component={Contacts} location={location}></Route>
          </div>
        )}/>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
