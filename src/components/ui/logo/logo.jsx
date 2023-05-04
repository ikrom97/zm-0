import style from './style.module.css';
import { AppRoute } from '@/const';
import Link from 'next/link';
import classNames from 'classnames';
import Image from 'next/image';
import logo from '../../../../public/images/logo.svg';
import { useTranslation } from 'next-i18next';

export default function Logo({ className }) {
  const { t } = useTranslation('common');

  return (
    <Link
      className={classNames(style.wrapper, className)}
      href={AppRoute.Home}
    >
      <Image
        className={style.image}
        src={logo}
        alt={t('toHomePage')}
      />
    </Link>
  );
}
