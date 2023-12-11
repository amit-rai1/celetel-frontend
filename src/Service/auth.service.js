
import axios from 'axios';
// import { API_BASEURL } from '../../environment';

import { API_BASEURL } from '../environment';


export const signUpClient = async (formData) => {
  try {
      const response = await axios.post(`${API_BASEURL}/api/client/signup`, formData);
      return response.data;
  } catch (error) {
      throw new Error(error.response?.data?.msg || 'Something went wrong');
  }
};
