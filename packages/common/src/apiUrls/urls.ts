/**
 * Centralized API route mappings used across the application.
 *
 * Used to store and access API endpoint paths in a consistent,
 * centralized manner to avoid hard-coded route strings.
 *
 * @readonly
 * @type {{ [key: string]: string }}
 *
 * @example
 * CREATE_GITHUB_APP_INSTALLATION: "/integration/github/install"
 * GET_USER_PROFILE: "/user/profile"
 */
export const API_URLS = {
  GET_FEEDBACKS: "/feedback",
  GET_DOMAINS: "/domain",
  GET_DOMAIN_EXIST: "/domain/exists",
} as const;
