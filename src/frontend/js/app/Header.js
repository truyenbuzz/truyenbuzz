import React from 'react';
import {Navbar, Nav, NavbarBrand, NavbarHeader, NavbarToggle, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect id="nav">
        <Navbar.Header id="nav-header">
          <Navbar.Brand>
            <a href="/">Truyệnbuzz</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title="Thể loại" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem id="nav-item" eventKey={1} href="/">Đăng nhập</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
