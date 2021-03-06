import { useMemo, useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const breadcrumbGql = gql`
  query breadcrumb {
    breadcrumb @client
  }
`;

export default function useBreadcrumb(breadcrumb) {
  const { data, client } = useQuery(breadcrumbGql);

  const current = useMemo(() => (data && data.breadcrumb) || [], [data]);
  const set = useCallback((stack) => client.writeQuery({ query: breadcrumbGql, data: { breadcrumb: stack } }), [
    client,
  ]);

  useEffect(() => set(breadcrumb), [breadcrumb, set]);

  return { current, set };
}
