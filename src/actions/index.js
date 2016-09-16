import axios from 'axios';
import { FETCH_USERS } from './types';

export function fetchUsers() {
  //request is a promise
  //this request will take some time
  const request = axios.get('https://jsonplaceholder.typicode.com/users')
  return {
    type: FETCH_USERS,
    payload: request
  };
}
