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
  mutation addUser( $username: String!, $email: String!, $password: String!, $companyName: String, $bio: String, $photoType:String
    $location: String!, $link: String, $reservationCost:String ) {
    addUser( username: $username, email: $email, password: $password, 
        companyName: $companyName, bio: $bio, photoType:$photoType, 
        location: $location, link : $link,  reservationCost: $reservationCost) {
      token
      user {
        _id
      }
    }
  }
`;