import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// header stran, navigacija koja se prikazuje na svakoj strani u app
const Header = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <IndexLink to="/" activeClassName="active">React Quiz Web Site</IndexLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1}>
                        <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    </NavItem>
                    <NavItem eventKey={3}>
                        <Link to="/questions" activeClassName="active">Make a Quiz</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;