import axios from 'axios';
import { VITE_API_URL } from '../utils/constants';

const apiClient = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const healthCheck = async () => {
  const response = await apiClient.get('/health');
  return response.data;
};