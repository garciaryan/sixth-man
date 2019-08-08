import { AUTHORIZE } from './types';
import axios from 'axios';
import { YAHOO_API_ID, YAHOO_API_SECRET } from 'react-native-dotenv';

export const authorize = () => {
  return (dispatch) => {
    axios.get(`https://api.login.yahoo.com/oauth2/request_auth?client_id=${YAHOO_API_ID}&redirect_uri=oob&response_type=code`)
    .then(res => {
      console.log(res.request.responseURL)
      dispatch({ type: AUTHORIZE, payload: res.request.responseURL })
    })
  }
}