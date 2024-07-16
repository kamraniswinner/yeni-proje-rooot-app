// reducers/ownerReducer.js
const initialState = {
  isAuthenticated: false,
  owner: null,
  loading: false,
  error: null,
  success: false,
  resetPasswordLinkSuccess: false,
  passwordResetSuccess: false,
  changeAdminRoleSuccess: false,
  admins: [],
  getAllAdminsSuccess: false,
  deleteAdminSuccess: false,
};

const ownerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_OWNER_REQUEST':
      return { ...state, loading: true, error: null, success: false };
    case 'CREATE_OWNER_SUCCESS':
      return { ...state, loading: false, owner: action.payload, success: true };
    case 'CREATE_OWNER_FAILURE':
      return { ...state, loading: false, error: action.payload, success: false };

    case 'OWNER_LOGIN_REQUEST':
      return { ...state, loading: true, error: null };
    case 'OWNER_LOGIN_SUCCESS':
      return { ...state, loading: false, isAuthenticated: true, owner: action.payload };
    case 'OWNER_LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'OWNER_LOGOUT':
      return { ...state, isAuthenticated: false, owner: null };

    case 'REQUEST_OWNER_PASSWORD_RESET_REQUEST':
      return { ...state, loading: true, error: null, resetPasswordLinkSuccess: false };
    case 'REQUEST_OWNER_PASSWORD_RESET_SUCCESS':
      return { ...state, loading: false, resetPasswordLinkSuccess: true };
    case 'REQUEST_OWNER_PASSWORD_RESET_FAILURE':
      return { ...state, loading: false, error: action.payload, resetPasswordLinkSuccess: false };

    case 'CONFIRM_OWNER_PASSWORD_RESET_REQUEST':
      return { ...state, loading: true, error: null, passwordResetSuccess: false };
    case 'CONFIRM_OWNER_PASSWORD_RESET_SUCCESS':
      return { ...state, loading: false, passwordResetSuccess: true };
    case 'CONFIRM_OWNER_PASSWORD_RESET_FAILURE':
      return { ...state, loading: false, error: action.payload, passwordResetSuccess: false };

    case 'CHANGE_ADMIN_ROLE_REQUEST':
      return { ...state, loading: true, error: null, changeAdminRoleSuccess: false };
    case 'CHANGE_ADMIN_ROLE_SUCCESS':
      return { ...state, loading: false, changeAdminRoleSuccess: true };
    case 'CHANGE_ADMIN_ROLE_FAILURE':
      return { ...state, loading: false, error: action.payload, changeAdminRoleSuccess: false };

    case 'GET_ALL_ADMINS_REQUEST':
      return { ...state, loading: true, error: null, getAllAdminsSuccess: false };
    case 'GET_ALL_ADMINS_SUCCESS':
      return { ...state, loading: false, admins: action.payload, getAllAdminsSuccess: true };
    case 'GET_ALL_ADMINS_FAILURE':
      return { ...state, loading: false, error: action.payload, getAllAdminsSuccess: false };

    case 'DELETE_ADMIN_REQUEST':
      return { ...state, loading: true, error: null, deleteAdminSuccess: false };
    case 'DELETE_ADMIN_SUCCESS':
      return { ...state, loading: false, deleteAdminSuccess: true, admins: state.admins.filter(admin => admin.id !== action.payload.id) };
    case 'DELETE_ADMIN_FAILURE':
      return { ...state, loading: false, error: action.payload, deleteAdminSuccess: false };

    default:
      return state;
  }
};

export default ownerReducer;
