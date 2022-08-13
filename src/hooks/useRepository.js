import { useQuery } from '@apollo/client'
import { FETCH_SINGLE_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data, error, loading } = useQuery(FETCH_SINGLE_REPOSITORY, { fetchPolicy: 'cache-and-network', variables: { repositoryId: id } })
  const item = data ? data.repository : null

  return { item, error, loading };
};

export default useRepository;