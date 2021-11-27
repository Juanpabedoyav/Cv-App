import styled from "styled-components";

export const NavContainer = styled.nav`
  /* border: 2px solid red; */
  position: fixed;
  bottom: 0;
  width: 100%;

  .box {
    /* border-top: 1px solid var(--color-principal); */
    display: inline-block;
    font-size: 26px;
    color: var(--color-principal);
    width: 100%;
  }
  .nav {
    justify-content: space-between;
  }
  .nav-titulo {
    font-size: 1rem;
    color: #33393f;
  }
  .nav-item {
    width: 25%;
  }
  .active {
    background-color: var(--color-principal);
  }
  .box-active {
    color: var(--color-blanco);
  }
`;
