import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Header.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 10px;

  &.active {
    color: orange;
  }
`;

const header = () => {
  return (
    <div>
      <header className={styles.header}>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </header>
      <Outlet />
    </div>
  );
};

export default header;
