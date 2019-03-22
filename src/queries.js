import gql from "graphql-tag";

export const USERS = gql`
  {
    users {
        id
        name
        departmentId
    }
  }
`;

export const USER = gql`
  {
    user {
        id
    }
  }
`;

export const USER_DETAILS = gql`
    {
        departments {
            id
            code
            name
            users {
                id
                name
                login
            }
        }
    }
`;

export const TEAMLIST = gql`
    {
        departments {
            id
            code
            name
            users {
                id
                name
                login
            }
        }
    }
`;