import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React, { useMemo } from 'react';
import { ServerStyleSheet } from 'styled-components';

// SECTION: Main

const MyDocument = () => {
  const bodyStyle = useMemo(
    () => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: "'FK Grotesk', sans-serif",
      fontFeatureSettings: "'pnum' on, 'lnum' on",
      color: '#202532',
      fontSize: '12px',
    }),
    [],
  );

  return (
    <Html>
      <Head />
      <body style={bodyStyle}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
