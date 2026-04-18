import axios from 'axios';

const API_BASE_URL = (
  process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
).replace(/\/+$/, '');

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/users/register', userData),
  login: (credentials) => api.post('/users/login', credentials),
  getProfile: () => api.get('/users/profile'),
};

// Transactions API
export const transactionsAPI = {
  getAll: (filters = {}) => api.get('/transactions', { params: filters }),
  create: (transaction) => api.post('/transactions', transaction),
  update: (id, transaction) => api.put(`/transactions/${id}`, transaction),
  delete: (id) => api.delete(`/transactions/${id}`),
};

// Reports API
export const reportsAPI = {
  getMonthly: (month, year) => api.get('/reports/monthly', { params: { month, year } }),
  exportPDF: (filters = {}) => api.get('/reports/export/pdf', { 
    params: filters,
    responseType: 'blob'
  }),
  exportExcel: (filters = {}) => api.get('/reports/export/excel', { 
    params: filters,
    responseType: 'blob'
  }),
};

export default api;
