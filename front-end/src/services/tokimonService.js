import { apiUrl } from '../config/config.json';
import axios from 'axios';

export function getAllTokimon() {
  return axios.get(apiUrl);
}

export function getTokimonById(tokimonId) {
  return axios.get(`${apiUrl}/${tokimonId}`)
}

export function deleteTokimon(tokimonId) {
  return axios.delete(`${apiUrl}/${tokimonId}`);
}

export function addTokimon(tokimon){
  return axios.post(apiUrl, tokimon);
}

export function updateTokimon(tokimonId, tokimon) {
  return axios.put(`${apiUrl}/${tokimonId}`, tokimon);
}