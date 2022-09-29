import omit from 'lodash/fp/omit';
import Link from 'next/link';
import { ComponentPropsWithoutRef, memo } from 'react';
import styled, { css } from 'styled-components';

// SECTION: Styles

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

// !SECTION
// SECTION: Main

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  type?: ComponentPropsWithoutRef<'button'>['type'];
}

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  type: 'anchor';
}

const Button = memo((props: ButtonProps | AnchorProps = { type: 'button' }) => {
  if (props.type === 'anchor') {
    const passedHref = typeof props.href === 'string' ? props.href : '';
    return (
      <Link href={passedHref}>
        <StyledAnchor {...omit(['type'], props)} />
      </Link>
    );
  }

  return <StyledButton {...props} />;
});

export default Button;
