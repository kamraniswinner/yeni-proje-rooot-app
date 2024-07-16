import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdmin } from '../actions/ownerActions';

const DeleteAdmin = () => {
  const [adminId, setAdminId] = useState('');
  const dispatch = useDispatch();

  const { loading, error, deleteAdminSuccess } = useSelector(state => state.owner);

  const handleDelete = () => {
    dispatch(deleteAdmin(adminId));
  };

  return (
    <div>
      <h1>Delete Admin</h1>
      <input
        type="text"
        placeholder="Enter Admin ID"
        value={adminId}
        onChange={e => setAdminId(e.target.value)}
      />
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete Admin'}
      </button>
      {deleteAdminSuccess && <p>Admin deleted successfully.</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default DeleteAdmin;
