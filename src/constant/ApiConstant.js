export const SSR_BASE_URL = process.env.DOCKER_ENABLE
  ? "http://coding-backend:8000/api/v1"
  : process.env.NEXT_PUBLIC_BACKEND_URL;

export const BACKEND_URL = {
  signup: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`,
  login: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/login`,
  code: `${process.env.NEXT_PUBLIC_BACKEND_URL}/snippets`,
  heatmap: `${process.env.NEXT_PUBLIC_BACKEND_URL}/heatmap`,
  rashi: `${process.env.NEXT_PUBLIC_BACKEND_URL}/astrology/rashi`,
};

export const BACKEND_SSR_URL = {
  signup: `${SSR_BASE_URL}/auth/signup`,
  login: `${SSR_BASE_URL}/v1/auth/login`,
  code: `${SSR_BASE_URL}/snippets`,
  heatmap: `${SSR_BASE_URL}/heatmap`,
};
