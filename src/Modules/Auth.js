import axios from 'axios'

const apiUrl = 'https://cooperdl.herokuapp.com/api/v1';

const authenticate = async (email, password) => {
  const path = apiUrl + '/auth/sign_in';
  try {
    let response = await axios.post(path, { email: email, password: password })
    await storeAuthCredentials(response)
    sessionStorage.setItem('current_user', JSON.stringify({ id: response.data.data.id }));
    return { authenticated: true }
  } catch (error) {
    return { authenticated: false, message: error.response.data.errors[0] }
  }
};

const authenticateSignUp = async (email, password, password_confirmation) => {
  const path = apiUrl + '/auth';
  try {
    let response = await axios.post(path, { email: email, password: password, password_confirmation: password_confirmation })
    await storeAuthCredentials(response)
    sessionStorage.setItem('current_user', JSON.stringify({ id: response.data.data.id }));
    return { authenticated: true }
  } catch (error) {
    return { authenticated: false, message: error.response.data.errors.full_messages[0] }
  }
};

const storeAuthCredentials = ({ data, headers }) => {
  return new Promise((resolve) => {
    const uid = headers['uid'],
      client = headers['client'],
      accessToken = headers['access-token'],
      expiry = headers['expiry'];

      sessionStorage.setItem('credentials', JSON.stringify({
        uid: uid,
        client: client, 
        access_token: accessToken,
        expiry: expiry,
        token_type: 'Bearer'
      }));
      resolve(true)
  })
};

export { authenticate, storeAuthCredentials, authenticateSignUp }