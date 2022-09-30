import { render } from '@testing-library/react';

import transaction from '../../lib/test/fixtures/transaction';
import SuccessPage from './Success';

// SECTION: Main

describe('SuccessPage', () => {
  test('render', () => {
    const { container } = render(<SuccessPage transaction={transaction} />);

    expect(container).toMatchSnapshot();
  });
});
