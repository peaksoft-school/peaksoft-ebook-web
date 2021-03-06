export const DEFAULT_ROUTES = {
   INDEX: {
      PATH: '/',
      LABEL: 'Главная',
   },
   NOT_FOUND: {
      PATH: '*',
      LABEL: 'Страница не найдена',
   },
   BECOME_VENDOR: {
      PATH: '/become-vendor',
   },
}
export const GUEST_ROUTES = {}
export const CLIENT_ROUTES = {
   FILTER_PAGE: {
      PATH: '/filter-page',
      LABEL: 'Электронные книги',
   },
   PROFILE: {
      PATH: '/profile',
      LABEL: 'Профиль',
   },
   CLIENT_BASKET: {
      PATH: '/basket',
      LABEL: 'Корзина',
   },
   CLIENT_PROMOCODE: {
      PATH: '/promocode',
      LABEL: 'Промокод',
   },
   BOOK_INNER_PAGE: {
      PATH: '/:bookId',
   },
}
export const VENDOR_ROUTES = {
   VENDOR_PROFILE: {
      PATH: '/profile',
      LABEL: 'Профиль',
   },
   ADD_BOOK: {
      PATH: '/add-book',
      LABEL: 'Добавить книгу',
   },
   BOOK_INNER_PAGE: {
      PATH: '/:bookId',
      LABEL: 'Название книги',
   },
}

export const ADMIN_ROUTES = {
   APPLICATIONS: {
      PATH: '/applications',
      LABEL: 'Заявки',
   },
   APPLICTAIONS_INNER_PAGE: {
      PATH: '/applications/:id',
      LABEL: 'Книга',
   },
   VENDORS: {
      PATH: '/vendors',
      LABEL: 'Продавцы',
   },
   VENDORS_DETAILS: {
      PATH: '/vendors/:id',
      LABEL: 'Продавцы',
   },
   VENDORS_PROFILE: {
      PATH: '/vendors/:id/profile',
      LABEL: 'Профиль',
   },
   VENDORS_BOOKS: {
      PATH: '/vendors/:id/books',
      LABEL: 'Книги',
   },
   USERS: {
      PATH: '/users',
      LABEL: 'Пользователи',
   },
   USERS_PROFILE: {
      PATH: '/users/:id/profile',
      LABEL: 'Профиль',
   },
   BOOKS: {
      PATH: '/books',
      LABEL: 'Книги',
   },
}
