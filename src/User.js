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

const User = ({ id, name, departmentId }) => (
    <Link to={`/users/${id}`}>
        <Card>
        <Title>
            {name} / {departmentId}️
        </Title>
        </Card>
    </Link>
);
  
export default User;