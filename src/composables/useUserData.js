import { ref } from "vue";
import fetchUserData from "../api/fetchUserData";

/**
 * Custom composable for managing user data.
 *
 * @function useUserData
 * @returns {Object} An object containing reactive references for users data, loading state, and the function to load more users.
 * @property {Ref<Array>} users - Reactive array holding user data.
 * @property {Ref<boolean>} isLoading - Reactive boolean indicating loading state.
 * @property {Function} loadMoreUsers - Asynchronous function to load additional user data.
 */

export function useUserData() {
  const users = ref([]);
  const isLoading = ref(false);

  /**
   * Loads additional users from the API and appends them to `users` array.
   * Prevents concurrent loads by checking `isLoading` status.
   *
   * @async
   * @function loadMoreUsers
   * @param {number} [count=15] - The number of user records to fetch. Defaults to 15.
   * @returns {Promise<void>} A promise that resolves when data is successfully loaded and appended to `users`.
   * @throws {Error} Logs an error if the fetch operation fails.
   */

  const loadMoreUsers = async (count = 15) => {
    if (isLoading.value) return;

    isLoading.value = true;
    try {
      const data = await fetchUserData(count);
      users.value.push(...data.results);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      isLoading.value = false;
    }
  };

  return { users, isLoading, loadMoreUsers };
}