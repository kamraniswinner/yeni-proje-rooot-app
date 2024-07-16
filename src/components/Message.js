// src/components/Message.js
import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  padding: 10px;
  background-color: ${props => (props.variant === 'danger' ? '#f8d7da' : '#d4edda')};
  color: ${props => (props.variant === 'danger' ? '#721c24' : '#155724')};
  border: 1px solid ${props => (props.variant === 'danger' ? '#f5c6cb' : '#c3e6cb')};
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Message = ({ variant, children }) => {
  return <MessageContainer variant={variant}>{children}</MessageContainer>;
};

Message.defaultProps = {
  variant: 'success',
};

export default Message;
