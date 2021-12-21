import { getUserByName, getUserInfractions } from './user-api.js';

/**
* @param {string} userName
*/
export function getUser(username) {
  return new Promise((resolve, reject) => {
    getUserByName(username, resolve, reject);
  });
}

/**
* @param {string} userId
*/
export function getInfractions(userId) {
  return new Promise((resolve, reject) => {
    getUserInfractions(userId, resolve, reject);
  });
}
