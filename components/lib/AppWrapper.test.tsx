import { render } from '@testing-library/react';
import AppWrapper from './AppWrapper';

// SECTION: Main

describe('AppWrapper', () => {
  test('render', () => {
    const { container } = render(<AppWrapper>TEST</AppWrapper>);

    expect(container).toMatchSnapshot();
  });
});
