import { gql } from '@apollo/client'

export const FETCH_REPOSITORIES = gql`
query Repositories {
    repositories {
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

export const CURRENT_USER = gql`
query Me {
    me {
      id
      username   
    }
  }
`