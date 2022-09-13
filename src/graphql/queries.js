import { gql } from '@apollo/client'

export const FETCH_REPOSITORIES = gql`
query Repositories($searchKeyword: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
  repositories(searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection) {
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
    }
  }
`

export const FETCH_SINGLE_REPOSITORY = gql`
query Repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id
    ownerName
    name
    createdAt
    fullName
    reviews {
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