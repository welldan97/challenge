import { Formik } from 'formik';
import { memo, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Input from '../../lib/Input';
import { Box, Button, Footer, Header } from '../styles';
import { Transaction } from '../../../lib/Transaction';

// SECTION: Styles

const Form = styled.form`
  margin-top: 29px;
  margin-bottom: 7px;
`;

// !SECTION

// SECTION: Main

interface SendProps {
  onSend: () => void;
}

const SendPage = ({ onSend }: SendProps) => (
  <Box isShrunk>
    <Header>Please fill the form to send Ethereum</Header>
    <Form onSubmit={onSend} id="transaction">
      <Input name="from" placeholder="Your address" label="From" />
      <Input name="to" placeholder="Destination address" label="To" />
      <Input name="amount" placeholder="Ethereum amount" label="Amount" />
    </Form>
    <Footer isSeamless>
      <Button type="submit" autoFocus onClick={onSend} form="transaction">
        Send
      </Button>
    </Footer>
  </Box>
);

// /SECTION
// SECTION: Container

interface Props {
  onSend: (transaction: Transaction) => void;
}

export default memo(({ onSend }: Props) => {
  const transaction = useMemo(
    () => ({
      from: '',
      to: '',
      amount: '',
    }),
    [],
  );

  return (
    <Formik initialValues={transaction} enableReinitialize onSubmit={onSend}>
      {({ handleSubmit }) => <SendPage onSend={handleSubmit} />}
    </Formik>
  );
});
