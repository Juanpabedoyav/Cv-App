import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: #eef5f6;
  height: 100vh;
  color: var(--color-principal);
  overflow: hidden;
  .button {
    background-color: var(--color-principal);
    color: var(--color-blanco);
  }
  .button:hover {
    background-color: var(--color-principal);
    color: var(--color-blanco);
  }
  .input {
    border: 1px solid var(--color-principal);
  }
  .pass {
    border: 1px solid var(--color-principal);
    margin-top: 15px;
  }
  .input::placeholder,
  .pass::placeholder {
    color: var(--color-principal);
  }
`;
