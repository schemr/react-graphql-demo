import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    width: 32%;
    border-radius: 6px;
    overflow: hidden;
    margin: 0 2% 25px 0;
    position: relative;
    padding: 10px;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.28);
`;

const Title = styled.span`
  color: #000000;
`;

const List = styled.div`
    color: #999999;
    padding-left: 20px;
`;

const Team = ({ id, code, name, users }) => (
    // <Link to={`/teams/${id}`}></Link>
        <Card>
        <Title>
            {name}
        </Title>
        <List>
            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </List>
        </Card>
);
  
export default Team;