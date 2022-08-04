import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { Balance } from '../lib/Balance';
import { Transaction } from '../lib/Transaction';

// SECTION: Main

const getBalances = async () => axios.get('/api/balances');

const sendTransaction = async (transaction: Transaction) =>
  axios.post('/api/send', transaction);

type UseBalances = ({
  onSendSuccess,
}: {
  onSendSuccess: (transaction: Transaction) => void;
}) => {
  isError: boolean;
  transaction?: Transaction;
  balances?: Balance[];
  onSend: (transaction: Transaction) => void;
};

const useBalances: UseBalances = ({ onSendSuccess }) => {
  const { data } = useQuery(['balances'], getBalances);

  const [transaction, setTransaction] = useState<Transaction>();

  const mutation = useMutation(sendTransaction, {
    onSuccess: (_, nextTransaction) => {
      setTransaction(nextTransaction);
      onSendSuccess(nextTransaction);
    },
  });

  return useMemo(() => {
    if (!data) return { isError: true, onSend: mutation.mutate };

    const balances = data.data.value as Balance[];

    return {
      isError: mutation.isError,
      balances,
      transaction,
      onSend: mutation.mutate,
    };
  }, [data, transaction]);
};

export default useBalances;