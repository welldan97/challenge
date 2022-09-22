import { render } from '@testing-library/react';
import SuccessPage from '.';

// SECTION: Main

describe('SuccessPage', () => {
  test('render', () => {
    const { container } = render(
      <SuccessPage
        transaction={{ from: 'TEST_FROM', to: 'TEST_TO', amount: '77777' }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
