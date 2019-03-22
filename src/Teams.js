import React from "react";
import { Query } from "react-apollo";
import { TEAMLIST } from "./queries";
import Team from "./Team";

const Teams = () => (
    <Query query={TEAMLIST}>
        { ({ loading, data, error }) => {
            if (loading) return "loading";	
            if (error) return "something happened";
            return data.departments.map(team => (
                <Team
                    id={team.id}
                    key={team.code}
                    name={team.name}
                    users={team.users}>
                </Team>
            ))
        }}
    </Query>
);
  
export default Teams;
