import styled, { css } from "styled-components";

const closeMenu = css`
  &:after {
    top: 5px;
  }
  &:before {
    top: -5px;
  }
`;
const openMenu = css`
  background: transparent;

  &:after {
    top: 0px;
    transform: rotate(-45deg);
  }

  &:before {
    transform: rotate(45deg);
    top: 0;
  }
`;

const menuPostion = (p) => {
  return p.menuOpen ? openMenu : closeMenu;
};

export const IconContiner = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  @media screen and (max-width: 840px) {
    display: flex;
  }
`;

export const MenuIcon = styled.div`
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
  &:after,
  &:before {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
    top: -5px;
  }
  ${menuPostion}
`;
