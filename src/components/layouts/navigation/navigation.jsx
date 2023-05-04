import { useTranslation } from 'next-i18next';
import { AppRoute } from '@/const';
import { NavigationItem, StyledNavigation } from './styled';

export default function Navigation({ ...rest }) {
  const { t } = useTranslation('common');

  return (
    <StyledNavigation {...rest}>
      <NavigationItem href={AppRoute.Home}>{t('thoughts')}</NavigationItem>

      <NavigationItem href={AppRoute.Tags}>{t('tags')}</NavigationItem>

      <NavigationItem href={AppRoute.Author}>{t('aboutAuthor')}</NavigationItem>
    </StyledNavigation>
  );
}
