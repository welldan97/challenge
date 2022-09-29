import { NextApiRequest, NextApiResponse } from 'next';
import { Balance } from '../../lib/Balance';
import db from '../../lib/db';
import { Response } from '../../lib/Response';

// SECTION: Main

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<Balance[]>>,
) {
  if (req.method !== 'GET') {
    res.status(404).json({ status: 'error', message: 'Not found' });
    return;
  }

  res.status(200).json({
    status: 'success',
    value: db.get(),
  });
}
