// src/components/Loader.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 280px;
  width: calc(100% - 280px);
  height: calc(100vh - 60px);
  display: flex;
  margin-top:20%;
  margin-left:20%;
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loader = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loader;
