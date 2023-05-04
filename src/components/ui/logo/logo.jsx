import { AppRoute } from '@/const';
import Image from 'next/image';
import logo from '../../../../public/images/logo.svg';
import { useTranslation } from 'next-i18next';
import { StyledLogo } from './styled';

export default function Logo({ ...rest }) {
  const { t } = useTranslation('common');

  return (
    <StyledLogo
      href={AppRoute.Home}
      {...rest}
    >
      <Image
        src={logo}
        alt={t('toHomePage')}
      />
    </StyledLogo>
  );
}
