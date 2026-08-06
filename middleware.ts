import createMiddleware from 'next-intl/middleware';

export const locales = ['en', 'nl', 'de'] as const;

export const pathnames = {
    '/': '/',
    '/about': {
        en: '/about',
        nl: '/over-ons',
        de: '/ueber-uns'
    },
    '/portfolio': {
        en: '/portfolio',
        nl: '/portfolio',
        de: '/portfolio'
    }
};

export default createMiddleware({
    locales,
    defaultLocale: 'en',
    pathnames,
    localePrefix: 'as-needed'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(de|en|nl)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
