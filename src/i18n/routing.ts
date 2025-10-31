import {defineRouting} from 'next-intl/routing';

const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'never'
});

export default routing;
