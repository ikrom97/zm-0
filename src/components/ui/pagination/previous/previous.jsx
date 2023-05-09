import { useRouter } from 'next/router';
import { PaginationLink, StyledItem } from './styled';
import ArrowIcon from '@/components/icons/arrow-icon';
import { useTranslation } from 'next-i18next';

export default function Previous() {
  const { t } = useTranslation();
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  const isDisabled = +params.get('page') === 0 || +params.get('page') === 1;
  params.set('page', +params.get('page') - 1);

  return (
    <StyledItem>
      <PaginationLink
        href={`${router.pathname}?${params.toString()}`}
        isDisabled={isDisabled}
        aria-label={t('previous')}
      >
        <ArrowIcon />
      </PaginationLink>
    </StyledItem>
  );
}