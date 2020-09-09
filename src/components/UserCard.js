import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  max-width: 800px;
  align-items: center;
  background-color: white;
  margin: 20px;
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 6px;
  padding-top: 15%;
  margin-top: 20%;
`;

const CardImg = styled.img`
  width: 180px;
  border-radius: 15px;
`;

const UserCard = (props) => {
  return (
    <CardDiv>
      <CardImg src={props.user.avatar_url} alt='img' />
      <h4 style={{ textAlign: 'center' }}>{props.user.login}</h4>
    </CardDiv>
  );
};

export default UserCard;
