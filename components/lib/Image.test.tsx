import { render } from '@testing-library/react';
import Image from './Image';

// SECTION: Main

describe('Image', () => {
  test('render', () => {
    // SECTION: Main
    const { container } = render(
      <Image src="/Success.svg" alt="success" width="100" height="100" />,
    );

    expect(container).toMatchSnapshot();
  });
});
