import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation SaveBook($title: String!, $bookId: String, $authors: [String], $description: String, $image: String, $link: String) {
  saveBook(title: $title, bookId: $bookId, authors: $authors, description: $description, image: $image, link: $link) {
    _id
    bookCount
    email
    savedBooks {
      bookId
      authors
      description
      image
      link
      title
    }
    username
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        user {
            _id
            username
        }
    }
  }
`;
