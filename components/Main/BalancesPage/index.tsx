import React, { memo } from 'react';
import BalancesTable from './BalancesTable';
import { Box, Header, Footer, Button } from '../styles';
import type { Balance } from '../../../lib/Balance';

// SECTION: Main

interface Props {
  onNext: () => void;
  balances: Balance[];
}

const BalancePage = memo(({ onNext, balances }: Props) => (
  <Box>
    <Header>My Ethereum addresses</Header>
    <BalancesTable balances={balances} />
    <Footer>
      <span>Please copy the address from which you wish to send money.</span>
      <Button type="button" autoFocus onClick={onNext}>
        Next
      </Button>
    </Footer>
  </Box>
));

// /SECTION

export default BalancePage;
