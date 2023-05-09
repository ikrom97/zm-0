import { useRouter } from 'next/router';
import Next from './next/next';
import PaginationItem from './pagination-item/pagination-item';
import Previous from './previous/previous';
import { StyledPagination } from './styled';

export default function Pagination({ lastPage, ...rest }) {
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  const currentPage = +params.get('page') || 1;

  return (
    <StyledPagination {...rest}>
      {Array.from({ length: lastPage }, (_, i) => {
        const page = i + 1;
        if (page === 1 || page === lastPage) {
          return <PaginationItem key={page} page={page} />;
        }
        if (Math.abs(page - currentPage) == 3) {
          return <li key={page}>...</li>;
        }
        if (Math.abs(page - currentPage) > 3) {
          return null;
        }
        return <PaginationItem key={page} page={page} />;
      })}
      <Previous />
      <Next lastPage={lastPage} />
    </StyledPagination>
  );
}
