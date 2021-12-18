import styled from "styled-components";

export const NavContainer = styled.nav`
  /* border: 2px solid red; */
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #eef5f6;
  z-index: 10;
  .box {
    /* border-top: 1px solid var(--color-principal); */
    display: inline-block;
    font-size: 26px;
    color: var(--color-principal);
    width: 100%;
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav {
    justify-content: space-between;
  }
  .nav-titulo {
    font-size: 1rem;
    color: var(--color-principal);
  }
  .nav-item {
    width: 25%;
  }
  .active {
    background-color: var(--color-principal);
    div {
      color: white;
      p {
        color: white;
      }
    }
  }
  .box-active {
    color: var(--color-blanco);
  }
`;
