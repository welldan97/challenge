import styled, { css } from 'styled-components';

// SECTION: Main

const styles = css`
  background: #6932d4;
  border-radius: 100px;
  color: white;
  border: none;
  height: 40px;
  width: 88px;
  appearance: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: white;
  }
`;

export const StyledButton = styled.button`
  ${styles}
`;
export const StyledAnchor = styled.a`
  ${styles}
`;
