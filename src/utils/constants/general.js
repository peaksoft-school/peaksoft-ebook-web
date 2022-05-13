export const SERVER_BASE_URL =
   'http://ebookb4-env.eba-mf4cghji.eu-west-2.elasticbeanstalk.com/api'

export const ROLES = {
   ADMIN: '[ROLE_ADMIN]',
   VENDOR: '[ROLE_VENDOR]',
   CLIENT: '[ROLE_CLIENT]',
}

export const REGEXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

export const REGEXP_PASSWORD = /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{6,32}/g
