import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;

export const GET_ME = gql`
query Me {
  me {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      image
      link
      title
    }
  }
}
`;