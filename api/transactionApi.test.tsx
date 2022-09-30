import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { Transaction } from '../lib/Transaction';
import { Response } from '../lib/Response';
import transaction from '../lib/test/fixtures/transaction';
import transactionApi from './transactionApi';

// SECTION: Main

describe('transactionApi', () => {
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

  test('getAll', async () => {
    const result = await transactionApi.create(transaction);

    expect(result).toEqual(transaction);
  });
});
