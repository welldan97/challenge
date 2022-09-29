import { useMutation } from '@tanstack/react-query';
import { Formik } from 'formik';
import { memo, useCallback, useMemo } from 'react';
import transactionApi from '../../api/transactionApi';
import { Transaction } from '../../lib/Transaction';
import { Logo, Box } from '../styles';
import Form from './Form';
import Success from './Success';

// SECTION: Main

interface Props {
  onSend: () => void;
  transaction?: Transaction;
}

const Send = ({ onSend, transaction }: Props) => (
  <>
    <Logo src="/Logo.svg" alt="Utrust" width="120" height="28" />
    <Box isShrunk>
      {transaction ? (
        <Success transaction={transaction} />
      ) : (
        <Form onSend={onSend} />
      )}
    </Box>
  </>
);

// /SECTION
// SECTION: Container

export default memo(() => {
  const transaction = useMemo(
    () => ({
      from: '',
      to: '',
      amount: '',
    }),
    [],
  );

  const { mutate, data } = useMutation(transactionApi.create);

  const onSubmit = useCallback(
    (nextTransaction: Transaction) => mutate(nextTransaction),
    [],
  );

  return (
    <Formik initialValues={transaction} enableReinitialize onSubmit={onSubmit}>
      {({ handleSubmit }) => <Send onSend={handleSubmit} transaction={data} />}
    </Formik>
  );
});
