import Button from '@/components/ui/button/button';
import style from './style.module.css';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { AppRoute } from '@/const';

export default function Navigation({ className, isOpen }) {
  const { t } = useTranslation('common');

  return (
    <nav className={classNames(style.navigation, className, `${isOpen && style.menuOpen}`)}>
      <Button
        className={style.navigationItem}
        href={AppRoute.Home}
      >
        {t('thoughts')}
      </Button>
      <Button
        className={style.navigationItem}
        href={AppRoute.Tags}
      >
        {t('tags')}
      </Button>
      <Button
        className={style.navigationItem}
        href={AppRoute.Author}
      >
        {t('aboutAuthor')}
      </Button>
    </nav>
  );
}
