/**
 * Configuration object for the application.
 */
export const config = {
  /**
   * The domain of the API.
   * Defaults to "http://localhost:8080" if not provided through environment variable.
   */
  api_domain: process.env.NEXT_PUBLIC_API_DOMAIN || "http://localhost:8080",
};
