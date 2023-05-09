import { useRouter } from 'next/router';
import { PaginationLink, StyledItem } from './styled';
import ArrowIcon from '@/components/icons/arrow-icon';
import { useTranslation } from 'next-i18next';

export default function Next({ lastPage }) {
  const { t } = useTranslation();
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  const isDisabled = +params.get('page') === lastPage;

  if (+params.get('page')) {
    params.set('page', +params.get('page') + 1);
  } else {
    params.set('page', +params.get('page') + 2);
  }

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