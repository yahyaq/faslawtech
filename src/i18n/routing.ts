import {defineRouting} from 'next-intl/routing';

const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'ar',
  localePrefix: 'never'
});

export default routing;
