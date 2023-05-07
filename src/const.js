export const AppRoute = {
  Home: '/',
  Tags: '/tags',
  TagsSelected(slug) {
    return `/tags/${slug}`;
  },
  Author: '/author',
};
