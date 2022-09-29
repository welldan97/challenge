import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import balanceApi from '../../api/balanceApi';
import { Balance } from '../../lib/Balance';
import Button from '../lib/Button';
import { Box, Footer, Header, Logo } from '../styles';
import BalancesTable from './BalancesTable';

// SECTION: Main

interface Props {
  balances: Balance[];
}

const Balances = memo(({ balances }: Props) => (
  <>
    <Logo src="/Logo.svg" alt="Utrust" width="120" height="28" />
    <Box>
      <Header>My Ethereum addresses</Header>
      <BalancesTable balances={balances} />
      <Footer>
        <span>Please copy the address from which you wish to send money.</span>
        <Button type="anchor" data-testid="next" href="/send">
          Next
        </Button>
      </Footer>
    </Box>
  </>
));

// !SECTION
// SECTION Container

export default memo(({ balances: initialBalances }: Props) => {
  const { data: balances, isSuccess } = useQuery(
    ['balance', 'getAll'],
    balanceApi.getAll,
    { initialData: initialBalances, staleTime: 1000 },
  );
  if (!isSuccess) return null;

  return <Balances balances={balances} />;
});
