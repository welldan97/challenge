import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import balanceApi from '../../api/balanceApi';
import { Balance } from '../../lib/Balance';
import Button from '../lib/Button';
import Layout from '../lib/Layout';
import { Footer, Header } from '../styles';
import BalancesTable from './BalancesTable';

// SECTION: Main

interface Props {
  balances: Balance[];
}

const Balances = memo(({ balances }: Props) => (
  <Layout>
    <Header>My Ethereum addresses</Header>
    <BalancesTable balances={balances} />
    <Footer>
      <span>Please copy the address from which you wish to send money.</span>
      <Button type="anchor" data-testid="next" href="/send">
        Next
      </Button>
    </Footer>
  </Layout>
));

// !SECTION
// SECTION Container

interface ContainerProps {
  balances?: Balance[];
}

export default memo(({ balances: initialBalances }: ContainerProps) => {
  const { data: balances } = useQuery(
    ['balance', 'getAll'],
    balanceApi.getAll,
    initialBalances && { initialData: initialBalances, staleTime: 1000 },
  );

  return <Balances balances={balances} />;
});
