import { useTranslation } from 'next-i18next';
import { AppRoute } from '@/const';
import { NavigationItem, StyledNavigation } from './styled';
import { useRouter } from 'next/router';

export default function Navigation({ ...rest }) {
  const { t } = useTranslation('common');
  const router = useRouter()

  return (
    <StyledNavigation {...rest}>
      <NavigationItem
        href={AppRoute.Home}
        isActive={router.pathname === AppRoute.Home}
      >
        {t('thoughts')}
      </NavigationItem>

      <NavigationItem
        href={AppRoute.Tags}
        isActive={router.pathname.includes(AppRoute.Tags)}
      >
        {t('tags')}
      </NavigationItem>

      <NavigationItem
        href={AppRoute.Author}
        isActive={router.pathname.includes(AppRoute.Author)}
      >
        {t('aboutAuthor')}
      </NavigationItem>
    </StyledNavigation>
  );
}
