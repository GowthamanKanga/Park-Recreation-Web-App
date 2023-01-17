import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px #ccc;
`;

const NavLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: black;
  &.active {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  let location = useLocation();
  return (
    <Nav>
      <NavLink to="/" className={location.pathname === '/' ? "active" : ""}>Home</NavLink>
      <NavLink to="/park-list" className={location.pathname === '/park-list' ? "active" : ""}>Park List</NavLink>
    </Nav>
  );
};

export default Navbar;
