import { memo } from 'react';
import styled from 'styled-components';
import { Transaction } from '../../../lib/Transaction';
import Image from '../../lib/Image';
import { Box, Header } from '../styles';

// SECTION: Styles

const Success = styled(Image)`
  margin: 27px auto 11px;
  width: 100px;
`;

const Wrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

const Label = styled.div`
  font-size: 16px;
`;

const Amount = styled.div`
  font-size: 28px;
  transform: translateY(-2px);
`;

const Hr = styled.hr`
  border-top: 1px solid #202532;
  opacity: 1;
  margin-top: 12px;
  margin-bottom: 18px;
  width: 142px;
`;

const Address = styled.div`
  transform: translateY(1px);
  margin-bottom: 14px;
`;
// !SECTION

// SECTION: Main

interface Props {
  transaction: Transaction;
}

const SuccessPage = ({ transaction }: Props) => (
  <Box isShrunk>
    <Header>Transaction complete</Header>
    <Wrapper>
      <Success src="/Success.svg" alt="success" width="100" height="100" />
      <Label> You sent</Label>
      <Amount>{transaction.amount} ETH</Amount>
      <Hr />
      <Label>From</Label>
      <Address>{transaction.from}</Address>
      <Label>To</Label>
      <Address>{transaction.to}</Address>
    </Wrapper>
  </Box>
);

// /SECTION
// SECTION: Container

export default memo(SuccessPage);
