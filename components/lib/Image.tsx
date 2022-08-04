import BaseImage, { ImageProps } from 'next/image';
import { memo } from 'react';

// SECTION: Main

const Image = memo(({ className, style, ...props }: ImageProps) => (
  <div className={className} style={style}>
    <BaseImage {...props} />
  </div>
));

export default Image;
