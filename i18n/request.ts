import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = (await cookieStore).get?.('locale')?.value;
  const locale = cookieLocale === 'ru' ? 'ru' : 'en';

  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages
  };
});