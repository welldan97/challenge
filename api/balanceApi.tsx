import { Balance } from '../lib/Balance';
import request from './request';

// SECTION: Main

export default {
  async getAll({ signal }: { signal?: AbortSignal } = {}) {
    return request.get<Balance[]>('balances', { signal });
  },
};
