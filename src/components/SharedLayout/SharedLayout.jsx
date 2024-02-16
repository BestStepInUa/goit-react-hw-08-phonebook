import { Suspense } from 'react';
import PagesContainer from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar';

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <PagesContainer>
        <Suspense>
          <Outlet />
        </Suspense>
      </PagesContainer>
    </>
  );
};

export default SharedLayout;
