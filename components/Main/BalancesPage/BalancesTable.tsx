import React, { memo } from 'react';
import { Balance } from '../../../lib/Balance';
import { Address, Row, Symbol, Table, Value, ValueCell } from './styles';

// SECTION: Subcomponents

interface BalanceProps {
  balance: Balance;
}

const BalanceRow = memo(({ balance }: BalanceProps) => (
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

interface Props {
  balances: Balance[];
}

const BalancesTable = memo(({ balances }: Props) => (
  <Table>
    <tbody>
      {balances.map(balance => (
        <BalanceRow key={balance.address} balance={balance} />
      ))}
    </tbody>
  </Table>
));

export default BalancesTable;
