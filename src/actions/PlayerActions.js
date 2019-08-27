import { AUTHORIZE } from './types';
import axios from 'axios';
import { YAHOO_API_ID, YAHOO_API_SECRET } from 'react-native-dotenv';
import { JSO, Popup } from 'jso';

const CLIENT = new JSO({
	providerID: 'yahoo',
	client_id: YAHOO_API_ID,
	redirect_uri: 'com.sixthman:/callback',
	authorization: `https://api.login.yahoo.com/oauth2/request_auth?client_id=${YAHOO_API_ID}&redirect_uri=oob&response_type=code`,
	response_type: 'code',
	client_secret: YAHOO_API_SECRET,
})
const ROOT_API_URL = 'https://fantasysports.yahooapis.com/fantasy/v2/';

export const authorize = () => {
  return (dispatch) => {
		CLIENT.callback()
  }
}