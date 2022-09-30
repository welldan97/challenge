import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';

import Form from './Form';

// SECTION: Main

describe('Form', () => {
  const initialValues = {
    amount: '',
    from: '',
    to: '',
  };

  test('render', () => {
    const onSubmit = () => {};
    const { container } = render(
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <Form onSend={handleSubmit} />}
      </Formik>,
    );
    expect(container).toMatchSnapshot();
  });

  test('send', async () => {
    const onSubmit = jest.fn();
    render(
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <Form onSend={handleSubmit} />}
      </Formik>,
    );

    const from = screen.getByTestId('from');
    await userEvent.type(from, 'TEST_FROM');

    const to = screen.getByTestId('to');
    await userEvent.type(to, 'TEST_TO');

    const amount = screen.getByTestId('amount');
    await userEvent.type(amount, 'TEST_AMOUNT');

    const send = screen.getByTestId('send');
    await userEvent.click(send);

    expect(onSubmit.mock.calls[0][0]).toEqual({
      amount: 'TEST_AMOUNT',
      from: 'TEST_FROM',
      to: 'TEST_TO',
    });
  });
});
