import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import BalancesPage from './BalancesPage';
import SendPage from './SendPage';
import SuccessPage from './SuccessPage';
import Image from '../lib/Image';

// SECTION: Styles

const Logo = styled(Image)`
  margin-bottom: 21px;
  margin-left: 25px;
`;

// !SECTION
// SECTION: Main

const Main = memo(() => {
  const [page, setPage] = useState('balances');
  const handleNext = useCallback(() => {
    setPage('success');
  }, []);

  return (
    <div>
      <Logo src="/Logo.svg" alt="Utrust" width="120" height="28" />
      {page === 'balances' && <BalancesPage onNext={handleNext} />}
      {page === 'send' && <SendPage />}
      {page === 'success' && <SuccessPage />}
    </div>
  );
});

export default Main;
