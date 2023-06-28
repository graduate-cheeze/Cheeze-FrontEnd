const { DEV, SSR, MODE, PROD, BASE_URL, VITE_SERVER_URL } = import.meta.env

if (!VITE_SERVER_URL) throw new Error('missing environment value')

const env = {
  DEV,
  SSR,
  MODE,
  PROD,
  BASE_URL,
  VITE_SERVER_URL: VITE_SERVER_URL + '',
}

export default env
