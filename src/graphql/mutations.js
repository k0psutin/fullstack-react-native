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