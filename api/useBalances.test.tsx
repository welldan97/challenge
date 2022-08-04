/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-empty-function, @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { renderHook, act, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import useBalances from './useBalances';

// SECTION: Mocks

const balances = { address: 'TEST_ADDRESS', value: 'TEST_VALUE' };
const transaction = { from: 'TEST_FROM', to: 'TEST_TO', value: 'TEST_VALUE' };

// !SECTION
// SECTION: Main

describe('useBalances', () => {
  let mock;
  let wrapper;

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
    const queryClient = new QueryClient();
    wrapper = function baseWrapper({ children }) {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };
  });

  it('should return balances', async () => {
    if (!wrapper) return;

    const { result } = renderHook(
      () =>
        useBalances({
          onSendSuccess: () => {},
        }),
      { wrapper },
    );

    await waitFor(() => {
      expect(result.current.isError).toBe(false);
      expect(result.current.balances).toEqual(balances);
    });
  });

  it('should send transaction', async () => {
    if (!wrapper) return;
    const { result } = renderHook(
      () =>
        useBalances({
          onSendSuccess: () => {},
        }),
      { wrapper },
    );
    act(() => {
      result.current.onSend(transaction);
    });

    await waitFor(() => {
      expect(result.current.transaction).toEqual(transaction);
    });
  });
});
