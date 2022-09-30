import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Send from '.';
import { Response } from '../../lib/Response';
import transaction from '../../lib/test/fixtures/transaction';
import AppWrapper from '../lib/AppWrapper';
import { Transaction } from '../../lib/Transaction';

// SECTION: Main

describe('Send', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);

    mock.onPost('/api/transactions').reply(200, {
      status: 'success',
      value: transaction,
    } as Response<Transaction>);
  });

  afterEach(() => {
    mock.reset();
  });

  test('render', () => {
    const { container } = render(
      <AppWrapper>
        <Send />
      </AppWrapper>,
    );
    expect(container).toMatchSnapshot();
  });

  test('send', async () => {
    const { container } = render(
      <AppWrapper>
        <Send />
      </AppWrapper>,
    );

    const from = screen.getByTestId('from');
    await userEvent.type(from, 'TEST_FROM');

    const to = screen.getByTestId('to');
    await userEvent.type(to, 'TEST_TO');

    const amount = screen.getByTestId('amount');
    await userEvent.type(amount, 'TEST_AMOUNT');

    const send = screen.getByTestId('send');

    await userEvent.click(send);

    await waitFor(() => {
      expect(screen.getByTestId('success')).toBeTruthy();
    });
    expect(container).toMatchSnapshot();
  });
});
