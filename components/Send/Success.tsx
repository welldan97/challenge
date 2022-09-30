import { memo } from 'react';

import { Transaction } from '../../lib/Transaction';
import { Header } from '../styles';
import { Address, Amount, Hr, Label, Success, Wrapper } from './styles';

// SECTION: Main

interface Props {
  transaction: Transaction;
}

const SuccessPage = memo(({ transaction }: Props) => (
  <>
    <Header>Transaction complete</Header>
    <Wrapper data-testid="success">
      <Success src="/Success.svg" alt="success" width="100" height="100" />
      <Label> You sent</Label>
      <Amount>{transaction.amount} ETH</Amount>
      <Hr />
      <Label>From</Label>
      <Address>{transaction.from}</Address>
      <Label>To</Label>
      <Address>{transaction.to}</Address>
    </Wrapper>
  </>
));

// /SECTION
// SECTION: Container

export default SuccessPage;
