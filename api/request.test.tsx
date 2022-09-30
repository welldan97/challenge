import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { Response } from '../lib/Response';
import request from './request';

// SECTION: Main

describe('request', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);

    mock.onGet('/api/test').reply(200, {
      status: 'success',
      value: 'TEST',
    } as Response<string>);

    mock.onPost('/api/test').reply(200, {
      status: 'success',
      value: 'TEST',
    } as Response<string>);
  });

  afterEach(() => {
    mock.reset();
  });

  test('get', async () => {
    const result = await request.get('test', {});

    expect(result).toEqual('TEST');
  });

  test('post', async () => {
    const result = await request.post('test', { value: 'test' }, {});

    expect(mock.history.post[0].data).toEqual('{"value":"test"}');
    expect(result).toEqual('TEST');
  });
});
