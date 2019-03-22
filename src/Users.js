import React from "react";
import { Query } from "react-apollo";
import { USERS } from "./queries";
import User from "./User";

const Users = () => (
    <Query query={USERS}>
        { ({ loading, data, error }) => {
            if (loading) return "loading";	
            if (error) return "something happened";
            return data.users.map(user => (
                <User
                    id={user.id}
                    key={user.id}
                    name={user.name}
                    departmentId={user.departmentId}>
                </User>
            ))
        }}
    </Query>
);
  
export default Users;