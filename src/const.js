export const AppRoute = {
  Home: '/',
  ThoughtsSelected(slug) {
    return `/thoughts/${slug}`;
  },
  Tags: '/tags',
  TagsSelected(slug) {
    return `/tags/${slug}`;
  },
  Author: '/author',
};
