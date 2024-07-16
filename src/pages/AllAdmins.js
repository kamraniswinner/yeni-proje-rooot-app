// src/pages/GetAllAdmins.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllAdmins } from '../actions/ownerActions'; // Adjust the path according to your project structure
import Loader from '../components/Loader'; // Optional: Component to show a loading spinner
import Message from '../components/Message'; // Optional: Component to show error messages
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 280px;
  right: 0;
  bottom: 0;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
`;

const Th = styled.th`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: #ff4b4b;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #ff6b6b;
  }
`;

const AllAdmins = () => {
  const dispatch = useDispatch();

  const { loading, error, admins } = useSelector((state) => state.owner);

  useEffect(() => {
    dispatch(getAllAdmins());
  }, [dispatch]);

  return (
    <Container>
      <h1>All Admins</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin._id}>
                <Td>{admin.username}</Td>
                <Td>{admin.email}</Td>
                <Td>{admin.role}</Td>
                <Td>
                  <Link to={`/admin/${admin._id}`}>
                    <Button>Manage</Button>
                  </Link>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default AllAdmins;
