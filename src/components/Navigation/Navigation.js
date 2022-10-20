import React from 'react';
import Nav from 'react-bootstrap/Nav';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <Nav className={s.container}>
      <Nav.Item>
        <Nav.Link
          href="/"
          className={({ isActive }) => (isActive ? s.active_link : s.link)}
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="heroes"
          className={({ isActive }) => (isActive ? s.active_link : s.link)}
        >
          Information about superhero
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="new-hero"
          className={({ isActive }) => (isActive ? s.active_link : s.link)}
        >
          Create superhero
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
