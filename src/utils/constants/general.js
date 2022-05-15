export const SERVER_BASE_URL =
   'http://ebookb4-env.eba-mf4cghji.eu-west-2.elasticbeanstalk.com/api'

export const ROLES = {
   ADMIN: '[ROLE_ADMIN]',
   VENDOR: '[ROLE_VENDOR]',
   CLIENT: '[ROLE_CLIENT]',
}

export const REGEXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

export const REGEXP_PASSWORD = /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{6,32}/g

export const LOCAL_STORAGE_USER_KEY = 'eBook-user-key-json'

export const SIGN_IN_QUERY_PARAMS = 'sign-in'

export const SIGN_UP_QUERY_PARAMS = 'sign-up'

export const SIGN_UP_VENDOR_QUERY_PARAMS = 'sign-up-vendor'

export const confirmMessage = {
   whenCloseSignInModal:
      'Are you sure you want to close the modal window? If you close the entered data will be cleared',
   whenPassToSignIn:
      'Are you sure you want to pass to sign-in? If you close the entered data will be cleared',
}
