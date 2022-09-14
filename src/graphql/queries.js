import { gql } from '@apollo/client'

export const FETCH_REPOSITORIES = gql`
query Repositories($searchKeyword: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $first: Int, $after: String!) {
  repositories(searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection, first: $first, after: $after) {
      edges {
        node {
          id
          ownerName
          name
          createdAt
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          watchersCount
          forksCount
          openIssuesCount
          url
          ownerAvatarUrl
          description
          language
          userHasReviewed
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`

export const FETCH_SINGLE_REPOSITORY = gql`
query Repository($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    id
    ownerName
    name
    createdAt
    fullName
    reviews(first: $first, after: $after) {
      edges {
        node {
          id
          userId
          repositoryId
          rating
          createdAt
          text
          user {
            id
            username
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    ratingAverage
    reviewCount
    stargazersCount
    watchersCount
    forksCount
    openIssuesCount
    url
    ownerAvatarUrl
    description
    language
    userHasReviewed
  }
}
`

export const CURRENT_USER = gql`
query Me {
    me {
      id
      username   
    }
  }
`