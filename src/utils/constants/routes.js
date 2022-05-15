export const DEFAULT_ROUTES = {
   INDEX: {
      PATH: '/',
      LABEL: 'Главная',
   },
   NOT_FOUND: {
      PATH: '*',
      LABEL: 'Страница не найдена',
   },
}
export const GUEST_ROUTES = {}
export const CLIENT_ROUTES = {}
export const VENDOR_ROUTES = {}

export const ADMIN_ROUTES = {
   APPLICATIONS: {
      PATH: '/applications',
      LABEL: 'Заявки',
   },
   VENDORS: {
      PATH: '/vendors',
      LABEL: 'Продавцы',
   },
   USERS: {
      PATH: '/users',
      LABEL: 'Пользователи',
   },
   BOOKS: {
      PATH: '/books',
      LABEL: 'Книги',
   },
}
