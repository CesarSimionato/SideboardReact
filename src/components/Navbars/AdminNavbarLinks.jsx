import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">7</span>
        <p className="hidden-lg hidden-md">Notificação</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notificação 1</MenuItem>
            <MenuItem eventKey={2.2}>Notificação 2</MenuItem>
            <MenuItem eventKey={2.3}>Notificação 3</MenuItem>
            <MenuItem eventKey={2.4}>Notificação 4</MenuItem>
            <MenuItem eventKey={2.5}>Outras Notificações</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Pesquisar</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Conta
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Dropdown"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Ação</MenuItem>
            <MenuItem eventKey={2.2}>Outra Ação</MenuItem>
            <MenuItem eventKey={2.3}>Espere</MenuItem>
            <MenuItem eventKey={2.4}>Outra Ação</MenuItem>
            <MenuItem eventKey={2.5}>Espere</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Link Separado</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            Sair
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
