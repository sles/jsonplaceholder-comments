export const ROUTES = {
  root: '/',
  main: '/comments',
  // example of dynamic route
  // if id is undefined - it is a pattern for Router, in other cases - it is a link
  dynamic: {
    post: (id = ':id') => `/post/${id}`,
  },
};
