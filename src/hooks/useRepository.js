import { useQuery } from '@apollo/client'
import { FETCH_SINGLE_REPOSITORY } from '../graphql/queries';

const useRepository = (id, first = 3, after = '') => {
  const variables = { repositoryId: id, first, after }

  const { data, error, fetchMore, loading } = useQuery(FETCH_SINGLE_REPOSITORY, { fetchPolicy: 'cache-and-network', variables })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository?.reviews?.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        ...variables,
        after: data?.repository?.reviews?.pageInfo.endCursor
      }
    })
  }

  const item = data?.repository
  const reviews = item?.reviews?.edges.map((edge) => edge.node)

  return { item, handleFetchMore, reviews, error, loading };
};

export default useRepository;