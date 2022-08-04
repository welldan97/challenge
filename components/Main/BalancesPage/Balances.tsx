import React, { memo } from 'react';
import styled from 'styled-components';

// SECTION: Styles

const Table = styled.table`
  margin-left: 24px;
  margin-right: 24px;
`;

const Row = styled.tr`
  height: 75px;
  & + & {
    border-top: 1px solid #e0e0f4;
  }
`;

const Address = styled.span`
  display: block;
  font-size: 13px;
  letter-spacing: 0.05em;
  transform: translateY(3px);
`;

const ValueCell = styled.td`
  text-align: right;
  transform: translateY(1px);
`;

const Value = styled.span`
  font-size: 16px;
  letter-spacing: 0.05em;
  text-align: right;
  font-weight: bold;
`;

const Symbol = styled.span`
  font-size: 12px;
  letter-spacing: 0.05em;
  text-align: right;
`;

// !SECTION
// SECTION: Subcomponents

interface BalanceProps {
  balance: {
    address: string;
    value: string;
  };
}

const Balance = memo(({ balance }: BalanceProps) => (
  <Row>
    <td>
      <Address>{balance.address}</Address>
    </td>
    <ValueCell>
      <Value>{balance.value}</Value>
      <Symbol> ETH</Symbol>
    </ValueCell>
  </Row>
));

// !SECTION
// SECTION: Main

const Addresses = memo(() => {
  const balances = [
    {
      address: '0x32be343b94f860124dc4fee278fdcbd38c102d88',
      value: '0.04793',
    },
    {
      address: '0x32be343b94f860924dc4fee278fdcbd38c102d88',
      value: '0.04793',
    },
    {
      address: '0x32be343b94f860824dc4fee278fdcbd38c102d88',
      value: '0.04793',
    },
    {
      address: '0x32be343b94f860224dc4fee278fdcbd38c102d88',
      value: '0.04793',
    },
  ];

  return (
    <Table>
      <tbody>
        {balances.map(balance => (
          <Balance key={balance.address} balance={balance} />
        ))}
      </tbody>
    </Table>
  );
});

export default Addresses;
