import '@/styles/global.css';
import classNames from 'classnames';
import { appWithTranslation } from 'next-i18next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
});

function App({ Component, pageProps }) {
  return (
    <div className={classNames('root', roboto.className)}>
      <Component {...pageProps} />
    </div>
  );
};

export default appWithTranslation(App);
