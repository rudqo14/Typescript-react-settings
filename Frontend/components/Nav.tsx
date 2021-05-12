import React from 'react';
import styled from '@emotion/styled';

const Nav = () => {
  return (
    <Navbar>
      <div className="navbarContainer">
        <div>로고</div>
        <NavbarMenu>
          <div>홈</div>
          <div>Software 공유하기</div>
          <div>프로필</div>
        </NavbarMenu>
      </div>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.nav`
  height: 50px;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #eeeeee;

  .navbarContainer {
    width: 1200px;
    display: flex;
    justify-content: space-between;
  }
`;

const NavbarMenu = styled.div`
  display: flex;

  & > div {
    margin: 0 4px;
  }
`;
