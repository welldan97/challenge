import { render } from '@testing-library/react';
import BalancesTable from './BalancesTable';

// SECTION: Main

describe('BalancesTable', () => {
  const balances = [
    {
      address: 'TEST_ADDRESS1',
      value: 'TEST_VALUE1',
    },
    {
      address: 'TEST_ADDRESS2',
      value: 'TEST_VALUE2',
    },
    {
      address: 'TEST_ADDRESS3',
      value: 'TEST_VALUE3',
    },
  ];

  test('render', () => {
    const { container } = render(<BalancesTable balances={balances} />);

    expect(container).toMatchSnapshot();
  });
});
