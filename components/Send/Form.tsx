import { memo } from 'react';

import Input from '../lib/Input';
import { Button, Footer, Header } from '../styles';
import { Form } from './styles';

// SECTION: Main

interface Props {
  onSend: () => void;
}

const SuccessPage = memo(({ onSend }: Props) => (
  <>
    <Header>Please fill the form to send Ethereum</Header>
    <Form onSubmit={onSend} id="transaction">
      <Input name="from" placeholder="Your address" label="From" autoFocus />
      <Input name="to" placeholder="Destination address" label="To" />
      <Input name="amount" placeholder="Ethereum amount" label="Amount" />
    </Form>
    <Footer isSeamless>
      <Button type="submit" form="transaction" data-testid="send">
        Send
      </Button>
    </Footer>
  </>
));

// /SECTION
// SECTION: Container

export default SuccessPage;
