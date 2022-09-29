import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../lib/db';
import { Response } from '../../lib/Response';
import { Transaction } from '../../lib/Transaction';

// SECTION: Utils

const getError = (e: unknown) => {
  if (!(e instanceof Error)) return { status: 500, message: 'Unknown error' };

  if (e.message === 'Invalid from address')
    return { status: 404, message: e.message };
  if (e.message === 'Invalid to address')
    return { status: 422, message: e.message };
  if (e.message === 'Insufficient funds')
    return { status: 422, message: e.message };
  if (e.message === 'Invalid amount')
    return { status: 422, message: e.message };

  return { status: 500, message: 'Unknown error' };
};

// !SECTION
// SECTION: Main

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<Transaction>>,
) {
  const transaction: Transaction = req.body as Transaction;

  if (req.method !== 'POST') {
    res.status(404).json({ status: 'error', message: 'Not found' });
    return;
  }

  try {
    db.applyTransaction(transaction);
  } catch (e) {
    const { status, message } = getError(e);

    res.status(status).json({ status: 'error', message });
    return;
  }

  res.status(200).json({
    status: 'success',
    value: transaction,
  });
}
