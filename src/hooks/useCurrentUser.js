import { useQuery } from '@apollo/client'
import { CURRENT_USER } from '../graphql/queries';

const useCurrentUser = (includeReviews = false) => {
  const variables = { first: 5, after: '', includeReviews }
  const { data, error, fetchMore, loading } = useQuery(CURRENT_USER, { fetchPolicy: 'cache-and-network', variables })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me?.reviews?.pageInfo?.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.me.reviews.pageInfo.endCursor
      }
    })
  }

  const reviews = data?.me?.reviews?.edges.map((edge) => edge.node)

  return { data, handleFetchMore, reviews, error, loading };
};

export default useCurrentUser;