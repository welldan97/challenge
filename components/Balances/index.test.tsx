import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BalancesPage from '.';

// SECTION: Main

describe('BalancesPage', () => {
  const balances = [
    {
      address: 'TEST_ADDRESS1',
      value: 'TEST_VALUE1',
    },
    {
      address: 'TEST_ADDRESS2',
      value: 'TEST_VALUE2',
    },
    {
      address: 'TEST_ADDRESS3',
      value: 'TEST_VALUE3',
    },
  ];

  test('render', () => {
    const onNext = () => {};

    const { container } = render(
      <BalancesPage onNext={onNext} balances={balances} />,
    );

    expect(container).toMatchSnapshot();
  });

  test('next', async () => {
    const onNext = jest.fn();

    render(<BalancesPage onNext={onNext} balances={balances} />);

    const nextButton = screen.getByTestId('next');
    await userEvent.click(nextButton);

    expect(onNext).toBeCalled();
  });
});
