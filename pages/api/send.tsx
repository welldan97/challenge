import type { NextApiRequest, NextApiResponse } from 'next';
import type { Transaction } from '../../lib/Transaction';
// SECTION: Main

interface Data {
  status: 'success' | 'error';
  transaction?: Transaction;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    res.status(400).json({ status: 'error' });
    return;
  }
  res.status(200).json({
    status: 'success',
  });
}
