import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  max-width: 500px;
  margin: 2rem;
  filter: drop-shadow(-25px 20px 10px darkgrey);
  border-radius: 6px;
  padding: 2%;
`;

const CardImg = styled.img`
  width: 180px;
  border-radius: 0 25px 25px 0;
`;

const FollowingCard = ({ following, img }) => {
  return (
    <CardDiv>
      <CardImg src={img} />
      <h4 style={{ color: 'green', fontWeight: 'bolder', paddingTop: '5%' }}>
        {following}
      </h4>
    </CardDiv>
  );
};

export default FollowingCard;
