import { render } from '@testing-library/react';
import Button from './Button';

// SECTION: Main

describe('Button', () => {
  test('render as button', () => {
    const { container } = render(<Button>test</Button>);

    expect(container).toMatchSnapshot();
  });

  test('render as anchor', () => {
    const { container } = render(
      <Button type="anchor" href="/">
        test
      </Button>,
    );

    expect(container).toMatchSnapshot();
  });
});
