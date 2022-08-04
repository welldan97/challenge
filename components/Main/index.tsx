import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import useBalances from '../../api/useBalances';
import type { Balance } from '../../lib/Balance';
import { Transaction } from '../../lib/Transaction';
import Image from '../lib/Image';
import BalancePage from './BalancesPage';
import SendPage from './SendPage';
import SuccessPage from './SuccessPage';

// SECTION: Styles

const Logo = styled(Image)`
  margin-bottom: 21px;
  margin-left: 25px;
`;

// !SECTION
// SECTION: Main

type Page = 'balances' | 'send' | 'success';

interface Props {
  page: Page;
  balances: Balance[];
  transaction?: Transaction;
  onNext: () => void;
  onSend: (transaction: Transaction) => void;
}

const Main = memo(({ page, balances, transaction, onNext, onSend }: Props) => (
  <div>
    <Logo src="/Logo.svg" alt="Utrust" width="120" height="28" />
    {page === 'balances' && <BalancePage onNext={onNext} balances={balances} />}
    {page === 'send' && <SendPage onSend={onSend} />}
    {page === 'success' && transaction && (
      <SuccessPage transaction={transaction} />
    )}
  </div>
));

// !SECTION
// SECTION: Container

export default memo(() => {
  const [page, setPage] = useState<Page>('balances');
  const [transaction, setTransaction] = useState<Transaction>();

  const handleNext = useCallback(() => {
    setPage('send');
  }, []);

  const handleSendSuccess = useCallback((nextTransaction: Transaction) => {
    setTransaction(nextTransaction);
    setPage('success');
  }, []);

  const { isError, balances, onSend } = useBalances({
    onSendSuccess: handleSendSuccess,
  });

  if (!balances || isError) return null;
  return (
    <Main
      page={page}
      balances={balances}
      transaction={transaction}
      onNext={handleNext}
      onSend={onSend}
    />
  );
});
