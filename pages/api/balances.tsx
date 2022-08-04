import type { NextApiRequest, NextApiResponse } from 'next';
import type { Balance } from '../../lib/Balance';
// SECTION: Main

interface Data {
  status: 'success' | 'error';
  value?: Balance[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'GET') {
    res.status(400).json({ status: 'error' });
    return;
  }

  res.status(200).json({
    status: 'success',
    value: [
      {
        address: '0x32be343b94f860124dc4fee278fdcbd38c102d88',
        value: '0.04793',
      },
      {
        address: '0xeb34a91523a687930f7244e76407952c5b239707',
        value: '1.54393',
      },
      {
        address: '0xe0e69f3eee354ef7f21d7abbb7afa67212d752b2',
        value: '10.2256',
      },
      {
        address: '0x8d12a197cb00d4747a1fe03395095ce2a5cc6819',
        value: '0.76849',
      },
    ],
  });
}
