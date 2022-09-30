import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Balances from '.';
import balances from '../../lib/test/fixtures/balances';
import { Response } from '../../lib/Response';
import { Balance } from '../../lib/Balance';
import AppWrapper from '../lib/AppWrapper';

// SECTION: Main

describe('Balances', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);

    mock.onGet('/api/balances').reply(200, {
      status: 'success',
      value: balances,
    } as Response<Balance[]>);
  });

  afterEach(() => {
    mock.reset();
  });

  test('render', async () => {
    const { container } = render(
      <AppWrapper>
        <Balances />
      </AppWrapper>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('wrapper')).toBeTruthy();
    });

    expect(container).toMatchSnapshot();
  });
});
