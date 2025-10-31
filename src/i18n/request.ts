import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import routing from './routing';

const requestConfig = getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return { locale, messages };
});

export default requestConfig;

// ✅ Extra explicit export for Turbopack detection
export const config = requestConfig;
