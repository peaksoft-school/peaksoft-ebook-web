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

export const CONFIRM_MESSAGE = {
   WHENCLOSEMODAL:
      'Are you sure you want to close the modal window? If you close the entered data will be cleared',
   WHENPASSTOSIGNIN:
      'Are you sure you want to pass to sign-in? If you close the entered data will be cleared',
   WHENPASSTOSIGNUPFORCLIENT:
      'Are you sure you want to pass to sign-up? If you close the entered data will be cleared',
}

export const INPUT_MASK_NUMBER = '+999 (999) 99 99 99'

export const VALIDATION_PARAMS_FOR_PASSWORD = {
   required: true,
   minLength: {
      value: 6,
      message: 'Пароль должен быть более 6-ти символов',
   },
   maxLength: {
      value: 32,
      message: 'Пароль должен быть менее 32-х символов',
   },
   pattern: {
      value: REGEXP_PASSWORD,
      message: 'Пароль должен содержать одну заглавную букву и одну цифру',
   },
}

export const TYPES_OF_BOOKS = {
   PAPER: {
      type: 'PAPERBOOK',
      title: 'Бумажная',
      key: 'paperBook',
   },
   AUDIO: {
      type: 'AUDIOBOOK',
      title: 'Аудиокнига',
      key: 'audioBook',
   },
   ELECTRONIC: {
      type: 'EBOOK',
      title: 'Электронная книга',
      key: 'electronicBook',
   },
}

export const LANGUAGES = {
   RUSSIAN: {
      title: 'Русский',
      key: 'RUSSIAN',
   },
   KYRGYZ: {
      title: 'Кыргызский',
      key: 'KYRGYZ',
   },
   ENGLISH: {
      title: 'Английский',
      key: 'ENGLISH',
   },
}

export const optionsForFieldsThatMustBeNumber = {
   required: true,
   valueAsNumber: true,
   validate: {
      valueBelowZero: (v) => v >= 0 || 'Must be more than 0',
   },
}
