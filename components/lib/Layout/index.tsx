import { memo } from 'react';
import { Logo, Box } from '../../styles';

// SECTION: Main

interface Props {
  isShrunk?: boolean;
  children: React.ReactNode;
}

const Layout = memo(({ isShrunk, children }: Props) => (
  <>
    <Logo src="/Logo.svg" alt="Utrust" width="120" height="28" />
    <Box isShrunk={isShrunk} data-testid="wrapper">
      {children}
    </Box>
  </>
));

export default Layout;
