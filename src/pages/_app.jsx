import { appWithTranslation } from 'next-i18next';
import { Roboto } from 'next/font/google';
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/global-styles';

const theme = {
  black: '#000000',
  white: '#ffffff',
  primary: '#111111',
  secondary: '#e2b65c',
  gray: '#747474',
  lightGray: '#f4f4f4',
}

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
});

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <div className={`root ${roboto.className}`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(App);
