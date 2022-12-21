import styled from 'styled-components';

export const HeaderBlock = styled.div`
  display: flex;
  background-color: #182123;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  height: 40px;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 0 17px;
  div {
    display: flex;
  }
`;
export const DivMenu = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  right: 0;
  top: 0;
  min-height: 40px;
  justify-content: center;

  .div-img {
    display: flex;
    align-items: center;
    height: 40px;
    padding-right: 17px;
    background-color: transparent;
  }
  :hover {
    nav {
      display: block;
    }
  }
`;
export const Nav = styled.nav`
  display: none;
  background: #273539;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  text-transform: uppercase;
  ul {
    list-style: none;
    padding-left: 23px;
    padding-right: 55px;
    padding-top: 23px;
    padding-bottom: 19px;
    .last-child {
      border-bottom: none !important;
      gap: 22.5px;
    }
    .li-img {
      gap: 12px;
    }
  }
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: #12cce4;
  }
  li {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #42585f;
  }
`;
