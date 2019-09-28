import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavItem } from 'reactstrap';
import LogoutNavBar from './LogoutNavBar';

export default function Navigation() {
  return (
    <Navbar color='light' light expand='xs'>
      <Collapse navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink to='/' exact className='nav-link' activeClassName='active'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/add' className='nav-link' activeClassName='active'>
              New Question
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='/leaderboard'
              className='nav-link'
              activeClassName='active'
            >
              Leaderboard
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <LogoutNavBar />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
