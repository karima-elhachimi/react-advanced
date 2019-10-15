/* eslint-disable import/prefer-default-export */
import axios from 'axios';

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {String} firstName
 * @property {String} lastName
 * @property {Date} [birthDate]
 * @property {'M'|'F'} gender
 * @property {Boolean} isFamily
 */

function map(resource) {
  const result = { ...resource };

  if (result.birthDate) result.birthDate = new Date(result.birthDate);
  return result;
}

/**
 * Get a user by its identifier.
 * @param {number} id
 * @returns {Promise<User>}
 */
export async function getUserById(id) {
  const response = await axios.get(`http://localhost:3000/users/${id}`);
  return map(response.data);
}
