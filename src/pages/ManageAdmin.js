// src/pages/ManageAdmin.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { changeAdminRole, deleteAdmin } from '../actions/ownerActions';
import Loader from '../components/Loader'; // Optional: Component to show a loading spinner
import Message from '../components/Message'; // Optional: Component to show error messages

const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 280px;
  padding: 20px;
  width: calc(100% - 280px);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 60vw;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
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

const AdminInfo = styled.div`
  margin-bottom: 20px;
`;

const ManageAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, admins } = useSelector((state) => state.owner);
  const [admin, setAdmin] = useState({});
  const [role, setRole] = useState('');

  useEffect(() => {
    if (admins) {
      const adminDetails = admins.find((admin) => admin._id === id);
      if (adminDetails) {
        setAdmin(adminDetails);
        setRole(adminDetails.role);
      }
    }
  }, [admins, id]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeAdminRole(id, role));
    navigate('/admins');
  };

  const handleDelete = () => {
    dispatch(deleteAdmin(id));
    navigate('/admins');
  };

  return (
    <Container>
      <h1>Manage Admin</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <AdminInfo>
            <strong>Admin Name:</strong> {admin.username}
            <br />
            <strong>Admin Email:</strong> {admin.email}
          </AdminInfo>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="role">Role :</Label>
            <Select id="role" value={role} onChange={handleRoleChange}>
              <option value="root">Root</option>
              <option value="productAdmin">Product Admin</option>
              <option value="orderAdmin">Order Admin</option>
              <option value="inventoryAdmin">Inventory Admin</option>
              <option value="customerSupportAdmin">Customer Support Admin</option>
              <option value="userAccessAdmin">User Access Admin</option>
              <option value="salesAdmin">Sales Admin</option>
            </Select>
            <Button type="submit">Change Role</Button>
            <Button type="button" onClick={handleDelete}>Delete Admin</Button>
          </Form>
        </>
      )}
    </Container>
  );
};

export default ManageAdmin;
