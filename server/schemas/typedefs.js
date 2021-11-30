const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    companyName: String
    bio: String
    photoType: String
    location: String
    link: String
    reservationCost: String
    image: String
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users(location: String) : [User]!
    allusers : [User]!
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, companyName: String,
      bio: String,
      photoType: String,
      location: String,
      link: String,
      reservationCost: String): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

