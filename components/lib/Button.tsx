import omit from 'lodash/fp/omit';
import Link from 'next/link';
import { ComponentPropsWithoutRef, memo } from 'react';
import { StyledAnchor, StyledButton } from './Button.styles';

// SECTION: Main

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  type?: ComponentPropsWithoutRef<'button'>['type'];
}

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  type: 'anchor';
  href: string;
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
