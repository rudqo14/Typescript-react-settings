import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = () => {
  return (
    <Navbar>
      <div className="navbarContainer">
        <div className="imgBox">
          <img src="static/logo.png" />
        </div>
        <NavbarMenu>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">Software 공유하기</Link>
          </div>
          <div>
            <Link to="/Login">프로필</Link>
          </div>
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
    width: 1000px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .imgBox {
      width: 90px;
      height: 30px;
      cursor: pointer;
      padding: 0 20px;

      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const NavbarMenu = styled.div`
  height: 100%;
  display: flex;

  & > div {
    display: flex;
    align-items: center;
    margin: 0 8px;
    cursor: pointer;
    font-weight: bold;

    a {
      height: 100%;
      color: black;
      display: flex;
      vertical-align: middle;
      align-items: center;

      :hover {
        border-bottom: 1px solid blue;
      }
    }
  }
`;
