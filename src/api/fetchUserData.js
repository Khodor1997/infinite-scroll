/**
 * Fetches user data from the Random User API.
 *
 * @function fetchUserData
 * @param {number} count - The number of user records to fetch.
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the API, 
 * @throws {Error} If the fetch operation fails.
 */

export default async function fetchUserData(count) {
  const response = await fetch(`https://randomuser.me/api/?results=${count}`);
  return response.json();
}
