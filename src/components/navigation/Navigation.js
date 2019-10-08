import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavItem } from 'reactstrap';
import * as Constants from '../../utils/constants';
import LogoutNavBar from './LogoutNavBar';

const Navigation = () => {
  return (
    <Navbar color='light' light expand='xs'>
      <Collapse navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink to='/' exact className='nav-link' activeClassName='active'>
              {Constants.HOME}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/add' className='nav-link' activeClassName='active'>
              {Constants.NEW_QUESTION}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='/leaderboard'
              className='nav-link'
              activeClassName='active'
            >
              {Constants.LEADERBOARD}
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
};

export default Navigation;
