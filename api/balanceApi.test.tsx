import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { Balance } from '../lib/Balance';
import { Response } from '../lib/Response';
import balances from '../lib/test/fixtures/balances';
import balanceApi from './balanceApi';

// SECTION: Main

describe('balanceApi', () => {
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

  test('getAll', async () => {
    const result = await balanceApi.getAll();

    expect(result).toEqual(balances);
  });
});
