/* eslint-disable import/no-extraneous-dependencies */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React, { FC, ReactNode } from 'react';
import useBalances from './useBalances';

// SECTION: Mocks

const balances = { address: 'TEST_ADDRESS', value: 'TEST_VALUE' };
const transaction = { from: 'TEST_FROM', to: 'TEST_TO', amount: 'TEST_VALUE' };

// !SECTION
// SECTION: Main

describe('useBalances', () => {
  let mock;
  let wrapper: FC;

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
    wrapper = function baseWrapper({ children }: { children: ReactNode }) {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };
  });

  it('should return balances', async () => {
    const { result } = renderHook(() => useBalances(), {
      wrapper: wrapper!,
    });

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
