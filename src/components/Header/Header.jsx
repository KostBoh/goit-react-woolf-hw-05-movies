import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import styles from './Header.module.css';

const header = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>

      <Outlet />
    </>
  );
};

export default header;
