import type { NextPage } from 'next';

import balanceApi from '../api/balanceApi';
import Balances from '../components/Balances';
import { Balance } from '../lib/Balance';

// SECTION: Main

interface Props {
  balances: Balance[];
}

const BalancesPage: NextPage<Props> = ({ balances }: Props) => (
  <Balances balances={balances} />
);

export async function getServerSideProps() {
  const balances = await balanceApi.getAll();

  return { props: { balances } };
}

export default BalancesPage;
