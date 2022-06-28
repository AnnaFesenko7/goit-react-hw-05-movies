// import { useState, useEffect } from 'react';

const API_KEY = '07bdf4dcb84de665a189c3d6f4d9143e';
const BASE_URL = 'https://api.themoviedb.org/3';

const dayTrend = '/trending/movie/day';

export function FetchMovieApi() {
  const url = `${BASE_URL}${dayTrend}?api_key=${API_KEY}`;
  return fetchService(url)
    .then(data => {
      if (data.total_pages === 0) {
        throw Error(data.statusText);
      }
      return data;
    })
    .then(data => {
      return data.results;
    });
}

export function FetchMovieDetailsApi(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  return fetchService(url);
}

export function FetchCreditsApi(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  return fetchService(url).then(data => data.cast);
}
export function FetchReviewsApi(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  return fetchService(url).then(data => data.results);
}
export function SearchMovieByName(searchQuery) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery.toLowerCase()}`;
  return fetchService(url)
    .then(data => {
      if (data.total_pages === 0) {
        throw Error(data.statusText);
      }
      return data;
    })
    .then(data => data.results);
}

function fetchService(url) {
  return fetch(url).then(r => {
    if (!r.ok) {
      throw Error(r.statusText);
    }
    return r.json();
  });
}
