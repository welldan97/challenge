import { Formik } from 'formik';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

// SECTION: Main

describe('Input', () => {
  test('render', () => {
    const initialValues = {
      testName: 'testValue',
    };

    const onSubmit = () => {};

    const { container } = render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => (
          <Input
            name="testName"
            label="TEST_LABEL"
            placeholder="TEST_PLACEHOLDER"
          />
        )}
      </Formik>,
    );

    expect(container).toMatchSnapshot();
  });

  test('change value', async () => {
    const initialValues = {
      testName: 'TEST_VALUE',
    };

    const onSubmit = jest.fn();

    render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} data-testid="form">
            <Input
              name="testName"
              label="TEST_LABEL"
              placeholder="TEST_PLACEHOLDER"
            />
          </form>
        )}
      </Formik>,
    );

    const input = screen.getByTestId('testName');
    await userEvent.clear(input);
    await userEvent.type(input, 'NEW_VALUE');

    await act(() => {
      fireEvent.blur(input);
      const form = screen.getByTestId('form');

      fireEvent.submit(form);
    });

    expect(onSubmit.mock.calls[0][0]).toEqual({
      testName: 'NEW_VALUE',
    });
  });
});
