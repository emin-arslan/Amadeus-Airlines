import axios from 'axios';

const apiBase = axios.create({
  baseURL: `https://localhost:3000`
});

const getFlightRoutes = async () => {
  try {
    const response = await apiBase.get('/flightroutes');
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

const getAirportNames = async () => {
  try {
    const response = await apiBase.get('/airportnames');
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

