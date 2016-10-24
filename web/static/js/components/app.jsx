import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import Icon from './utils/icon';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends React.Component {
  displayName() {
    return 'MainApp';
  }
  componentDidMount() {
  }
  renderBrand() {
    return (
      <Link to="/"><span>Dashboard</span></Link>
    );
  }
  renderNav() {
    return (
      <Nav pullRight>
        <li role="presentation">
          <Link to="/"><Icon name="home"/>Home</Link>
        </li>
        <NavDropdown id="collapsible-navbar-dropdown" title="User">
          <li role="presentation">
            <a href="" target="_blank">
              <Icon name="user" />Profile
            </a>
          </li>
          <li className="divider" role="separator"></li>
          <li role="presentation">
            <a href="">
              <Icon name="sign-out" />Log Out
            </a>
          </li>
        </NavDropdown>
      </Nav>
    );
  }
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
             <Navbar.Brand>{this.renderBrand()}</Navbar.Brand>
          </Navbar.Header>
          {this.renderNav()}
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
