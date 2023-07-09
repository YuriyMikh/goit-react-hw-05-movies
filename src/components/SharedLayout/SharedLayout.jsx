import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <br />
        <NavLink to="/movies"> Movies </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default SharedLayout;
