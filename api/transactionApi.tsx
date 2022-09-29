import { Transaction } from '../lib/Transaction';
import request from './request';

// SECTION: Main

export default {
  async create(
    transaction: Transaction,
    { signal }: { signal?: AbortSignal } = {},
  ) {
    return request.post<Transaction>('transactions', transaction, { signal });
  },
};
