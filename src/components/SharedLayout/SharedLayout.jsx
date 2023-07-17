import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
  padding: 0px 20px;
`;

const SharedLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );

  // (
  //   <>
  //     <nav>
  //       <NavLink to="/"> Home </NavLink>
  //       <br />
  //       <NavLink to="/movies"> Movies </NavLink>
  //     </nav>
  //     <Outlet />
  //   </>
  // );
};

export default SharedLayout;
