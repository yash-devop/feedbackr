/**
 * Centralized cache key mappings for React Query.
 *
 * Used to define consistent query keys across the application
 * to avoid cache collisions and hard-coded strings.
 *
 * @readonly
 * @type {{ [key: string]: string }}
 *
 * @example
 * GET_GITHUB_INTEGRATION: "GET_GITHUB_INTEGRATION"
 * GET_ALL_REPOSITORIES: "ALL_REPOSITORIES"
 * GET_SPECIFIC_CONTENT: "SPECIFIC-CONTENT"
 */
export const CACHE_KEYS: { [key: string]: string } = {
  GET_GITHUB_INTEGRATION: "GET_GITHUB_INTEGRATION",
  GET_ALL_REPOSITORIES: "ALL_REPOSITORIES",
  GET_SPECIFIC_CONTENT: "SPECIFIC-CONTENT",
  // CREATE_INSTALLATION_GITHUB: "CREATE_INSTALLATION_GITHUB",
};
