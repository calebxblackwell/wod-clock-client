import React from 'react';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';
//specific website that provides authentication
const URL = '';

export function signInAction({ email, password }, history) {
  return async (dispatch) => {
    try {
      const res = await router.post(`${URL}/signin`, { email, password });

      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      history.push('/secret');
    } catch(error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
}
export function signOutAction() {
  localStorage.clear();
  return {
    type: UNAUTHENTICATED
  };
}
