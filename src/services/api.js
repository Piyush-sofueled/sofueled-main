// src/services/api.js
import axios from 'axios';

const API_URL = 'https://sofueled.com/blog/wp-json/wp/v2';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to handle rate limits and retries
api.interceptors.response.use(
  response => response,
  async error => {
    const { config, response: { status } } = error;
    if (status === 429) { // Rate limit exceeded
      // Retry after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return api(config);
    }
    return Promise.reject(error);
  }
);

export const fetchPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const fetchPost = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
};

export const fetchTags = async () => {
  const response = await api.get('/tags');
  return response.data;
};
