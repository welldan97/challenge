import Balances from './Balances';
import { Box, Header, Footer, Button } from '../styles';

// SECTION: Main

interface Props {
  onNext: () => void;
}

const BalancesPage = ({ onNext }: Props) => (
  <Box>
    <Header>My Ethereum addresses</Header>
    <Balances />
    <Footer>
      <span>Please copy the address from which you wish to send money.</span>
      <Button type="button" autoFocus onClick={onNext}>
        Next
      </Button>
    </Footer>
  </Box>
);

export default BalancesPage;
