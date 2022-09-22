import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import balances from '../../lib/test/fixtures/balances';
import transaction from '../../lib/test/fixtures/transaction';
import Wrapper from '../../lib/test/Wrapper';
import Main from '.';

// SECTION: Main

describe('Main', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);

    mock.onGet('/api/balances').reply(200, {
      success: true,
      value: balances,
    });

    mock.onPost('/api/send').reply(200, {
      success: true,
      value: transaction,
    });
  });

  afterEach(() => {
    mock.reset();
  });

  const balancesPage = async () => {
    const { container } = await render(
      <Wrapper>
        <Main />
      </Wrapper>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('wrapper')).toBeTruthy();
    });

    return { container };
  };

  const sendPage = async () => {
    const { container } = await balancesPage();

    const nextButton = screen.getByTestId('next');
    await userEvent.click(nextButton);

    return { container };
  };

  test('balances page', async () => {
    const { container } = await balancesPage();

    expect(container).toMatchSnapshot();
  });

  test('send page', async () => {
    const { container } = await sendPage();

    expect(container).toMatchSnapshot();
  });

  test('success page', async () => {
    const { container } = await sendPage();

    const fromInput = screen.getByTestId('from');
    await userEvent.type(fromInput, 'FROM');

    const toInput = screen.getByTestId('to');
    await userEvent.type(toInput, 'TO');

    const amountInput = screen.getByTestId('amount');
    await userEvent.type(amountInput, 'AMOUNT');

    const sendButton = screen.getByTestId('send');
    await userEvent.click(sendButton);

    expect(container).toMatchSnapshot();
  });
});
