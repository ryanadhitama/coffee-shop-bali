import { useRouter } from 'next/router';
import { useMemo } from 'react';

function useQuery(fromArgs?: Record<string, string>): URLSearchParams {
  const router = useRouter();
  const qs = fromArgs || (router.query as Record<string, string>);

  return useMemo(() => new URLSearchParams(qs), [qs]);
}

export default useQuery;
