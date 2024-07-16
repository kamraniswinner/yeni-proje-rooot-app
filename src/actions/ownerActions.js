// actions/ownerActions.js
import axios from 'axios';

export const CREATE_OWNER_REQUEST = 'CREATE_OWNER_REQUEST';
export const CREATE_OWNER_SUCCESS = 'CREATE_OWNER_SUCCESS';
export const CREATE_OWNER_FAILURE = 'CREATE_OWNER_FAILURE';

export const OWNER_LOGIN_REQUEST = 'OWNER_LOGIN_REQUEST';
export const OWNER_LOGIN_SUCCESS = 'OWNER_LOGIN_SUCCESS';
export const OWNER_LOGIN_FAILURE = 'OWNER_LOGIN_FAILURE';

export const REQUEST_OWNER_PASSWORD_RESET_REQUEST = 'REQUEST_OWNER_PASSWORD_RESET_REQUEST';
export const REQUEST_OWNER_PASSWORD_RESET_SUCCESS = 'REQUEST_OWNER_PASSWORD_RESET_SUCCESS';
export const REQUEST_OWNER_PASSWORD_RESET_FAILURE = 'REQUEST_OWNER_PASSWORD_RESET_FAILURE';

export const CONFIRM_OWNER_PASSWORD_RESET_REQUEST = 'CONFIRM_OWNER_PASSWORD_RESET_REQUEST';
export const CONFIRM_OWNER_PASSWORD_RESET_SUCCESS = 'CONFIRM_OWNER_PASSWORD_RESET_SUCCESS';
export const CONFIRM_OWNER_PASSWORD_RESET_FAILURE = 'CONFIRM_OWNER_PASSWORD_RESET_FAILURE';

export const CHANGE_ADMIN_ROLE_REQUEST = 'CHANGE_ADMIN_ROLE_REQUEST';
export const CHANGE_ADMIN_ROLE_SUCCESS = 'CHANGE_ADMIN_ROLE_SUCCESS';
export const CHANGE_ADMIN_ROLE_FAILURE = 'CHANGE_ADMIN_ROLE_FAILURE';

export const GET_ALL_ADMINS_REQUEST = 'GET_ALL_ADMINS_REQUEST';
export const GET_ALL_ADMINS_SUCCESS = 'GET_ALL_ADMINS_SUCCESS';
export const GET_ALL_ADMINS_FAILURE = 'GET_ALL_ADMINS_FAILURE';

export const DELETE_ADMIN_REQUEST = 'DELETE_ADMIN_REQUEST';
export const DELETE_ADMIN_SUCCESS = 'DELETE_ADMIN_SUCCESS';
export const DELETE_ADMIN_FAILURE = 'DELETE_ADMIN_FAILURE';

export const OWNER_LOGOUT = 'OWNER_LOGOUT';

// Create Owner
export const createOwner = (username, email, password) => async (dispatch) => {
  dispatch({ type: CREATE_OWNER_REQUEST });

  try {
    const { data } = await axios.post('http://localhost:5000/api/owner/createOwner', { username, email, password });
    dispatch({ type: CREATE_OWNER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_OWNER_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Owner Login
export const ownerLogin = (email, password) => async (dispatch) => {
  dispatch({ type: OWNER_LOGIN_REQUEST });

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('http://localhost:5000/api/owner/login', { email, password }, config);
    localStorage.setItem('owner', JSON.stringify(data));
    dispatch({ type: OWNER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: OWNER_LOGIN_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Request Owner Password Reset
export const requestOwnerPasswordReset = (email) => async (dispatch) => {
  dispatch({ type: REQUEST_OWNER_PASSWORD_RESET_REQUEST });

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('http://localhost:5000/api/owner/requestPasswordReset', { email }, config);
    dispatch({ type: REQUEST_OWNER_PASSWORD_RESET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REQUEST_OWNER_PASSWORD_RESET_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Confirm Owner Password Reset
export const confirmOwnerPasswordReset = (token, newPassword) => async (dispatch) => {
  dispatch({ type: CONFIRM_OWNER_PASSWORD_RESET_REQUEST });

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('http://localhost:5000/api/owner/confirmPasswordReset', { token, newPassword }, config);
    dispatch({ type: CONFIRM_OWNER_PASSWORD_RESET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CONFIRM_OWNER_PASSWORD_RESET_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Change Admin Role
export const changeAdminRole = (id, role) => async (dispatch, getState) => {
  dispatch({ type: CHANGE_ADMIN_ROLE_REQUEST });

  try {
    const { owner } = getState().owner;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${owner.token}`,
      },
    };
    const { data } = await axios.put(`http://localhost:5000/api/owner/changeAdminRole/${id}`, { role }, config);
    dispatch({ type: CHANGE_ADMIN_ROLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CHANGE_ADMIN_ROLE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Get All Admins
export const getAllAdmins = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_ADMINS_REQUEST });

  try {
    const { owner } = getState().owner;
    const config = {
      headers: {
        Authorization: `Bearer ${owner.token}`,
      },
    };
    const { data } = await axios.get('http://localhost:5000/api/owner/admins', config);
    dispatch({ type: GET_ALL_ADMINS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_ADMINS_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Delete Admin
export const deleteAdmin = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_ADMIN_REQUEST });

  try {
    const { owner } = getState().owner;
    const config = {
      headers: {
        Authorization: `Bearer ${owner.token}`,
      },
    };
    const { data } = await axios.delete(`http://localhost:5000/api/owner/deleteAdmin/${id}`, config);
    dispatch({ type: DELETE_ADMIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_ADMIN_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const ownerLogout = () => {
  localStorage.removeItem('owner');
  return { type: OWNER_LOGOUT };
};
