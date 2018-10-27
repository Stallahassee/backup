const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  errors: {},
}

export default function auth(state=initialState, action) {
  switch(action.type){
    case 'LOGIN_SUCCESSFUL':
    case 'REGISTRATION_SUCCESSFUL':
      localStorage.setItem("token",action.data.token);
      return {...state, ...action.data, isAuthenticated: true, user: action.user};

    case 'AUTHENTICATION_ERROR':
    case 'LOGIN_FAILED':
    case 'REGISTRATION_FAILED':
    case 'LOGOUT_SUCCESSFUL':
      localStorage.removeItem("token");
      return {...state, errors: action.data, token: null, user: null, isAuthenticated: false};

    default:
      return state;
  }
}
