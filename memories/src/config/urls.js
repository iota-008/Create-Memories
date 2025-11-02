// Centralized API URLs
export const API_BASE = process.env.REACT_APP_API_URL || "https://memories-api.duckdns.org";

export const POSTS_URL = `${API_BASE}/posts`;
export const USER_URL = `${API_BASE}/user`;

// OAuth
export const GOOGLE_OAUTH_START = `${USER_URL}/oauth/google/start`;
