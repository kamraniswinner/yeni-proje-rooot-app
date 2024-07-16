// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 280px;
  right: 0;
  bottom: 0;
  padding: 20px;
`;

const Home = () => {
  return (
    <Container>
      This is home
    </Container>
  );
}

export default Home;
