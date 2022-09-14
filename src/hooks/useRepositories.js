import { useQuery } from '@apollo/client'
import { FETCH_REPOSITORIES } from '../graphql/queries';

const sortOrder = {
  'LATEST': { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  'HIGH_RATING': { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  'LOW_RATING': { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
}

const useRepositories = (order = 'LATEST', searchKeyword = '', first = 4, after = '') => {
  const variables = { orderBy: sortOrder[order]['orderBy'], orderDirection: sortOrder[order]['orderDirection'], searchKeyword, first, after } 
  const { data, error, fetchMore, loading } = useQuery(FETCH_REPOSITORIES, { fetchPolicy: 'cache-and-network', variables })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repositories.pageInfo.endCursor
      }
    })
  }

  const repositories = data ? data.repositories.edges.map((edge) => edge.node) : []

  return { repositories, handleFetchMore, error, loading };
};

export default useRepositories;