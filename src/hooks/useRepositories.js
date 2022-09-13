import { useQuery } from '@apollo/client'
import { FETCH_REPOSITORIES } from '../graphql/queries';

const orderBy = {
  'LATEST': { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  'HIGH_RATING': { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  'LOW_RATING': { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
}

const useRepositories = (order = 'LATEST', searchKeyword = '') => {
  const { data, error, loading } = useQuery(FETCH_REPOSITORIES, { fetchPolicy: 'cache-and-network', variables: { ...orderBy[order], searchKeyword } })
  const repositories = data ? data.repositories.edges.map((edge) => edge.node) : []

  return { repositories, error, loading };
};

export default useRepositories;