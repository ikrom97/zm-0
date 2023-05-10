import { useTranslation } from 'next-i18next';
import { AppRoute } from '@/const';
import { NavigationItem, StyledNavigation } from './styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SearchIcon from '@/components/icons/search-icon';
import SearchModal from './search-modal/search-modal';

export default function Navigation({ ...rest }) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
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

        <NavigationItem
          title={t('search')}
          onClick={() => setIsSearching(true)}
        >
          <SearchIcon
            width={20}
            height={20}
          />
        </NavigationItem>
      </StyledNavigation>
      {isSearching && <SearchModal onClose={() => setIsSearching(false)} />}
    </>
  );
}
