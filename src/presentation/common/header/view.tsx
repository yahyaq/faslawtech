'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '@/assets/pngs/logo-sm.png';
import { useTranslations, useLocale } from 'next-intl'; // ✅ get t() and locale
import { useRouter, usePathname } from '@/i18n/navigation'; // ✅ uses your routing setup

export default function HeaderView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('header');
  const locale = useLocale(); // ✅ the active locale (en or ar)
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Navigation links from translations
  const navigation = [
    { name: t('nav.about'), href: '#aboutUs' },
    { name: t('nav.purpose'), href: '#guidedByPurpose' },
    { name: t('nav.values'), href: '#ourValues' },
    { name: t('nav.services'), href: '#services' },
  ];

  const colors = {
    gold: {
      500: '#C8A128',
      600: '#AA8822',
      700: '#8E6E1C',
    },
  };

  // ✅ Locale Switcher
  const handleLanguageToggle = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header
      className="relative w-full z-50 bg-white/70 backdrop-blur-md shadow-sm"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12"
      >
        {/* === Logo Section === */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src={Logo}
            alt={t('logoAlt')} // ✅ translated logo alt text
            width={48}
            height={48}
            className="object-contain"
            priority
          />
          {/* <span
            className="text-lg font-bold tracking-wide"
            style={{
              color: colors.gold[700],
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {t('brandName')} 
          </span> */}
        </a>

        {/* === Mobile Menu Button === */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* === Desktop Navigation === */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-semibold transition-colors duration-200 hover:opacity-80"
              style={{ color: colors.gold[700] }}
            >
              {item.name}
            </a>
          ))}

          {/* === Language Toggle Button === */}
          <button
            onClick={handleLanguageToggle}
            className="ml-8 px-4 py-2 text-sm font-semibold border-2 rounded-full transition-all duration-300"
            style={{
              borderColor: colors.gold[600],
              color: colors.gold[700],
            }}
          >
            {/* ✅ Dynamic translation for button text */}
            {locale === 'en'
              ? t('languageToggle.arabic')
              : t('languageToggle.english')}
          </button>
        </div>
      </nav>

      {/* === Mobile Navigation Drawer === */}
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-xl sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-3">
              <Image
                src={Logo}
                alt={t('logoAlt')}
                width={48}
                height={48}
                className="object-contain"
              />
              <span
                className="text-lg font-bold"
                style={{
                  color: colors.gold[700],
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {t('brandName')}
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50"
                style={{ color: colors.gold[700] }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Language Toggle (Mobile) */}
          <div className="mt-8 border-t border-gray-200 pt-4">
            <button
              onClick={handleLanguageToggle}
              className="w-full px-4 py-2 text-sm font-semibold border-2 rounded-full transition-all duration-300"
              style={{
                borderColor: colors.gold[600],
                color: colors.gold[700],
              }}
            >
              {locale === 'en'
                ? t('languageToggle.arabic')
                : t('languageToggle.english')}
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
