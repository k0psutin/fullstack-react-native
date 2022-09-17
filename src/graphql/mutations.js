import { gql } from '@apollo/client'

export const AUTHENTICATE_USER = gql`
mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {    
      accessToken,
      expiresAt
      user {
        id
        username
        createdAt     
        reviewCount
      }
    }
  }
`

export const CREATE_REVIEW = gql`
mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    repositoryId
  }
}
`

export const CREATE_USER = gql`
mutation Mutation($user: CreateUserInput) {
  createUser(user: $user) {
    id
    username
  }
}
`

export const DELETE_REVIEW = gql`
mutation DeleteReview($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`