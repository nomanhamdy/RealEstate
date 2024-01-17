import axios from 'axios';

const BASE_URL = process.env.VUE_APP_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Error handling and logging
function handleApiError(error) {
  // Advanced error logging can be added here
  console.error('API Call Failed:', error.response ? error.response.data.message : error.message);
  return Promise.reject(error);
}

// Function to enrich data before sending to server
function enrichData(data) {
  // Example: Add timestamps or user info
  return { ...data, timestamp: new Date().toISOString() };
}

export default {
  // Property endpoints with data enrichment
  getProperties() {
    return apiClient.get('/properties').catch(handleApiError);
  },
  getProperty(id) {
    return apiClient.get(`/properties/${id}`).catch(handleApiError);
  },
  postProperty(property) {
    const enrichedProperty = enrichData(property);
    return apiClient.post('/properties', enrichedProperty).catch(handleApiError);
  },
  // Transaction endpoints with data validation
  getTransactions() {
    return apiClient.get('/transactions').catch(handleApiError);
  },
  postTransaction(transaction) {
    // Add validation logic here if needed
    return apiClient.post('/transactions', transaction).catch(handleApiError);
  },
  // User authentication with error handling
  loginUser(credentials) {
    return apiClient.post('/users/login', credentials).catch(error => {
      // Specific error handling for login
      console.error('Login failed:', error.message);
      throw error;
    });
  },
  // ... other CRUD operations
};
