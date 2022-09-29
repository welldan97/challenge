import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SendPage from '.';

// SECTION: Main

describe('SendPage', () => {
  test('render', () => {
    const onSend = () => {};
    const { container } = render(<SendPage onSend={onSend} />);
    expect(container).toMatchSnapshot();
  });

  test('send', async () => {
    const onSend = jest.fn();
    render(<SendPage onSend={onSend} />);

    const from = screen.getByTestId('from');
    await userEvent.type(from, 'TEST_FROM');

    const to = screen.getByTestId('to');
    await userEvent.type(to, 'TEST_TO');

    const amount = screen.getByTestId('amount');
    await userEvent.type(amount, 'TEST_AMOUNT');

    const send = screen.getByTestId('send');

    await userEvent.click(send);

    expect(onSend.mock.calls[0][0]).toEqual({
      from: 'TEST_FROM',
      to: 'TEST_TO',
      amount: 'TEST_AMOUNT',
    });
  });
});
