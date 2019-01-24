const LoginActions = {
  LOGIN: 'LoginActions.LOGIN',
  LOGGED_IN: 'LoginActions.LOGGED_IN',
  
  login(username, password) {
    return { type: LoginActions.LOGIN };
  },
};

export default LoginActions;
