import { useRouter } from 'next/router';
import { PaginationLink, StyledItem } from './styled';

export default function PaginationItem({ page }) {
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  const isDisabled = (+params.get('page') === 0 && page === 1) || +params.get('page') === page;
  params.set('page', page);

  return (
    <StyledItem>
      <PaginationLink
        href={`${router.pathname}?${params.toString()}`}
        isDisabled={isDisabled}
      >
        {page}
      </PaginationLink>
    </StyledItem>
  );
}
