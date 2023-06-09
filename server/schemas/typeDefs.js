const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]!
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  input BookInput {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(
      bookId: String,
      authors: [String],
      description: String,
      image: String,
      link: String,
      title: String!
    ): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
