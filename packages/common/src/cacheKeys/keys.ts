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
export const CACHE_KEYS = {
  GET_GITHUB_INTEGRATION: "GET_GITHUB_INTEGRATION",
  GET_ALL_REPOSITORIES: "ALL_REPOSITORIES",
  GET_SPECIFIC_CONTENT: "SPECIFIC-CONTENT",
  GET_FEEDBACKS: "GET_FEEDBACKS",
  GET_DOMAINS: "GET_DOMAINS",
  GET_DOMAINS_EXIST: "GET_DOMAINS_EXIST",
} as const;
