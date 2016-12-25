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
              <MenuItem eventKey={3.1} className="genre-item">Tiên Hiệp</MenuItem>
              <MenuItem eventKey={3.2} className="genre-item">Huyền Huyễn</MenuItem>
              <MenuItem eventKey={3.3} className="genre-item">Đô Thị</MenuItem>
              <MenuItem eventKey={3.4} className="genre-item">Khoa Huyễn</MenuItem>
              <MenuItem eventKey={3.5} className="genre-item">Lịch Sử</MenuItem>
              <MenuItem eventKey={3.6} className="genre-item">Quân Sự</MenuItem>
              <MenuItem eventKey={3.7} className="genre-item">Đồng Nhân</MenuItem>
              <MenuItem eventKey={3.8} className="genre-item">Du Hí</MenuItem>
              <MenuItem eventKey={3.9} className="genre-item">Cạnh Kỹ</MenuItem>
              <MenuItem eventKey={3.10} className="genre-item">Linh Dị</MenuItem>
              <MenuItem eventKey={3.11} className="genre-item">Xuyên Không</MenuItem>
              <MenuItem eventKey={3.12} className="genre-item">Ngôn Tình</MenuItem>
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
