import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Balance } from '../lib/Balance';
import { Transaction } from '../lib/Transaction';

const getBalances = async () => axios.get('/api/balances');

const sendTransaction = async (transaction: Transaction) =>
  axios.post('/api/send', transaction);

type UseBalances = ({
  onSendSuccess,
}: {
  onSendSuccess: (transaction: Transaction) => void;
}) => {
  isError: boolean;
  balances?: Balance[];
  onSend: (transaction: Transaction) => void;
};

const useBalances: UseBalances = ({ onSendSuccess }) => {
  const { data } = useQuery(['balances'], getBalances);

  const mutation = useMutation(sendTransaction, {
    onSuccess: (_, transaction) => {
      onSendSuccess(transaction);
    },
  });

  return useMemo(() => {
    if (!data) return { isError: true, onSend: mutation.mutate };

    const balances = data.data.value as Balance[];

    return { isError: mutation.isError, balances, onSend: mutation.mutate };
  }, [data]);
};

export default useBalances;
