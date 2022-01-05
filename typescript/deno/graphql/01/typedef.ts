import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts'

export const typeDefs = gql`
  type Query {
    hello: String
    allPositions: [Position!]!
  }

  type Mutation {
    insertPosition(roleName: String!, customerName: String!, remoteWorkAllowed: Boolean): Position!
  }

  type Position {
    _id: ID!
    role_name: String!
    customer_name: String!
    remote_work_allowed: Boolean
  }
`