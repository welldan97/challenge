import { render } from '@testing-library/react';
import Layout from '.';

// SECTION: Main

describe('Layout', () => {
  test('render', () => {
    const { container } = render(<Layout>TEST</Layout>);

    expect(container).toMatchSnapshot();
  });
});
