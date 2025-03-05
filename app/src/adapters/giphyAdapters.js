/*
An adapter is a helper function for sending a request to specific endpoint. Here, we have one adapter for fetching from the /trending endpoint and another for fetching from the /search endpoint. 

TODO:
- Import the API Key from your config.js file
- Complete each adapter function to fetch from the trending/ and search/ endpoints. See the README for the complete endpoint URLs that you will be fetching from.
*/

import { handleFetch } from './handleFetch.js'

import API_KEY from '../config.js';

const baseUrl = 'https://api.giphy.com/v1/gifs'

// Send a fetch request to the /trending endpoint and return the top 3 results
export const getTrendingGifs = async (k=3) => {
  const queryParams = new URLSearchParams({
    'api_key': API_KEY,
    'rating': 'g',
    'limit': k
  });

  const [data, error] = await handleFetch(`${baseUrl}/trending?${queryParams.toString()}`)

  if (error) return null;

  return data;
}

// Send a fetch request to the /search endpoint with the given term as a query parameter
export const getGifsBySearch = async (term, k=3) => {
  const queryParams = new URLSearchParams({
    'api_key': API_KEY,
    'rating': 'g',
    'q': term,
    'limit': k
  });

  const [data, error] = await handleFetch(`${baseUrl}/search?${queryParams.toString()}`);

  if (error) return null;

  return data;
}

