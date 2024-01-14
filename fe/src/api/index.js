import axios from 'axios';

const apiBase = axios.create({
  baseURL: `https://mocki.io/v1`
});

const getAirportNames = async () => {
  try {
    const response = await apiBase.get('/05115ccd-1b4e-4b8c-983d-de2e77d7f6d9');
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Server error:', error.response.data);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('An error occurred:', error.message);
    }

    throw error;
  }
};

const getFlightRoutes = async () => {
  try {
    const response = await apiBase.get('/5a78e971-c7f5-4035-a394-6497aa264345');
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Server error:', error.response.data);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('An error occurred:', error.message);
    }

    throw error;
  }
};

const api = {
  getAirportNames,
  getFlightRoutes
};

export default api;

