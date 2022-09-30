import { render } from '@testing-library/react';
import balances from '../../lib/test/fixtures/balances';

import BalancesTable from './BalancesTable';

// SECTION: Main

describe('BalancesTable', () => {
  test('render', () => {
    const { container } = render(<BalancesTable balances={balances} />);

    expect(container).toMatchSnapshot();
  });
});
