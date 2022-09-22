import { useField } from 'formik';
import { InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components';

// SECTION: Styles

const Wrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  height: 88px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  margin-left: 8px;
`;

const BaseInput = styled.input`
  height: 44px;
  background: #ffffff;
  border: 1px solid #6932d4;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
`;

// !SECTION
// SECTION: Main

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  name: string;
  placeholder: string;
  label: string;
}

const Input = memo(({ name, label, placeholder, ...rest }: Props) => {
  const [field] = useField({
    name,
  });

  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <BaseInput
        value={field.value}
        id={name}
        data-testid={name}
        placeholder={placeholder}
        onChange={field.onChange}
        onBlur={field.onBlur}
        {...rest}
      />
    </Wrapper>
  );
});

export default Input;
