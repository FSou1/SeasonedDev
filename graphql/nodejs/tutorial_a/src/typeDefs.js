import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    first_name: String!
    last_name: String!
  }

  type UsersResponse {
    page: Int!
    per_page: Int!
    total: Int!
    total_pages: Int!
    data: [User]!
  }

  type Query {
    users: UsersResponse
  }`;