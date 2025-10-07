const DEFAULT_ORIGIN = "https://api.tczhong.com";

const sanitizeOrigin = (origin) => origin.replace(/\/$/, "");

const apiOrigin = process.env.REACT_APP_API_ORIGIN
  ? sanitizeOrigin(process.env.REACT_APP_API_ORIGIN)
  : DEFAULT_ORIGIN;

export const dest_url = `${apiOrigin}/backend`;

const authFromEnv = process.env.REACT_APP_AUTH_URL;
export const auth_url = authFromEnv
  ? sanitizeOrigin(authFromEnv)
  : `${apiOrigin}/auth`;
