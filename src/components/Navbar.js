// src/components/Navbar.js
// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ownerLogout } from '../actions/ownerActions'; // Adjust the path according to your project structure

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  background-color: #ff4b4b;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  margin-right:50px;
  &:hover {
    background-color: #ff6b6b;
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(ownerLogout());
  };

  return (
    <NavbarContainer>
      <Logo>
        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Logo</Link>
      </Logo>
      <Menu>
        <div>Menu</div>
        <Button onClick={handleLogout}>Logout</Button>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
