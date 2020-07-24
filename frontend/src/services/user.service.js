import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/api/';

  const getAccountsBoard = () => {
    return axios.get(API_URL + 'accounts', { headers: authHeader() });
  }

  const getDataEntryBoard = () => {
    return axios.get(API_URL + 'dataEntry', { headers: authHeader() });
  }

  const getAdminBoard = () => {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

export default {
    getAccountsBoard,
    getDataEntryBoard,
    getAdminBoard,
  };
