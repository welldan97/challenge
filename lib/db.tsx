import Decimal from 'decimal.js';
import { Balance } from './Balance';
import { Transaction } from './Transaction';

// Simple in-memory database just for demo purposes

// SECTION: Db state

let balances = [
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
] as Balance[];

// !SECTION
// SECTION: Utils

const ethAddressRegEx = /^0x[a-fA-F0-9]{40}$/;

const validateTransaction = (
  transaction: Transaction,
  prevBalances: Balance[],
) => {
  const { from, to, amount } = transaction;

  const prevBalance = prevBalances.find(b => b.address === from);
  if (!prevBalance) throw new Error('Invalid from address');
  if (!ethAddressRegEx.test(to)) throw new Error('Invalid to address');
  if (Number.isNaN(Number(amount))) throw new Error('Invalid amount');
  if (Number(amount) <= 0) throw new Error('Invalid amount');
  if (new Decimal(prevBalance.value).lt(amount))
    throw new Error('Insufficient funds');
};

const getNextBalances = (
  prevBalances: Balance[],
  { from, to, amount }: Transaction,
) =>
  prevBalances.reduce((acc, { address, value }) => {
    let nextValue = new Decimal(value);
    if (address === from) {
      nextValue = nextValue.minus(amount);
    }
    if (address === to) {
      nextValue = nextValue.plus(amount);
    }

    return [...acc, { address, value: nextValue.toString() }];
  }, [] as Balance[]);

// !SECTION
// SECTION: Main

const db = {
  get() {
    return balances;
  },

  set(nextBalances: Balance[]) {
    balances = nextBalances;
  },

  applyTransaction(transaction: Transaction) {
    const prevBalances = this.get();

    validateTransaction(transaction, prevBalances);

    const nextBalances = getNextBalances(prevBalances, transaction);

    this.set(nextBalances);
  },
};

export default db;
