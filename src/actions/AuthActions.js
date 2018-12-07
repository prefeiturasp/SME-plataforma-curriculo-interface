import Auth from 'j-toker';
import { API_URL } from 'utils/constants';

const AuthActions = {
  FAILED: 'AuthActions.FAILED',
  LOGGED_IN: 'AuthActions.LOGGED_IN',
  LOGOUT: 'AuthActions.LOGOUT',
  SETUP: 'AuthActions.SETUP',
  
  login() {
    return dispatch => {
      Auth.oAuthSignIn({
        provider: 'saml',
        params: {
          namespace_name: 'api',
          resource_class: 'User',
        }
      })
      .then(function(user) {
        sessionStorage.setItem('user',
          JSON.stringify({
            'access-token': user['access-token'],
            'client': user.client,
            'uid': user.uid,
            'expiry': user.expiry,
            'token-type': 'Bearer',
          })
        );

        console.log("Login success:", user);
        dispatch({ type: AuthActions.LOGGED_IN });
      })
      .fail(function(error) {
        console.error('Login failure: ' + error.errors);
        dispatch({ type: AuthActions.FAILED });
      });
    }
  },
  logout() {
    Auth.signOut();
    return { type: AuthActions.LOGOUT };
  },
  setup() {
    Auth.configure({
      apiUrl:                API_URL + '/api',
      signOutPath:           '/auth/sign_out',
      emailSignInPath:       '/auth/sign_in',
      emailRegistrationPath: '/auth',
      accountUpdatePath:     '/auth',
      accountDeletePath:     '/auth',
      passwordResetPath:     '/auth/password',
      passwordUpdatePath:    '/auth/password',
      tokenValidationPath:   '/auth/validate_token',
      proxyIf:               function() { return false; },
      proxyUrl:              '/proxy',
      validateOnPageLoad:    false,
      forceHardRedirect:     false,
      storage:               'cookies',
      cookieExpiry:          14,
      cookiePath:            '/',

      passwordResetSuccessUrl: function() {
        return window.location.href;
      },

      confirmationSuccessUrl:  function() {
        return window.location.href;
      },

      tokenFormat: {
        "access-token": "{{ access-token }}",
        "token-type":   "Bearer",
        client:         "{{ client }}",
        expiry:         "{{ expiry }}",
        uid:            "{{ uid }}",
      },

      parseExpiry: function(headers){
        // convert from ruby time (seconds) to js time (millis)
        return (parseInt(headers['expiry'], 10) * 1000) || null;
      },

      handleLoginResponse: function(resp) {
        return resp.data;
      },

      handleAccountUpdateResponse: function(resp) {
        return resp.data;
      },

      handleTokenValidationResponse: function(resp) {
        return resp.data;
      },

      authProviderPaths: {
        saml:    '/auth/saml',
      }
    });

    return { type: AuthActions.SETUP };
  },
};

export default AuthActions;
