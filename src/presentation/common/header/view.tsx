'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '@/assets/pngs/logo-sm.png';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function HeaderView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Translated navigation
  const navigation = [
    { name: t('nav.about'), href: '#aboutUs' },
    { name: t('nav.purpose'), href: '#guidedByPurpose' },
    { name: t('nav.values'), href: '#ourValues' },
    { name: t('nav.services'), href: '#services' },
  ];

  // ✅ Full FAS Law Tech gold palette
  const colors = {
    gold: {
      50: '#FBF7E8',
      100: '#F6EBC4',
      200: '#F0DD9B',
      400: '#DFB93F',
      500: '#C8A128',
      600: '#AA8822',
      700: '#8E6E1C',
      900: '#32270A',
    },
    stone: {
      50: '#FAF9F7',
      100: '#F3F1ED',
      200: '#E5E1DA',
    },
  };

  // ✅ Locale switcher
  const handleLanguageToggle = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header
      className="relative w-full z-50 backdrop-blur-md shadow-sm"
      style={{
        background: `linear-gradient(to right, ${colors.gold[50]}, rgba(255,255,255,0.85))`,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12"
      >
        {/* === Logo Section === */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src={Logo}
            alt={t('logoAlt')}
            width={48}
            height={48}
            className="object-contain"
            priority
          />
        </a>

        {/* === Mobile Menu Button === */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 transition-all hover:bg-gold-100"
            style={{ color: colors.gold[700] }}
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
            className="ml-8 px-4 py-2 text-sm font-semibold border-2 rounded-full transition-all duration-300 hover:shadow-md"
            style={{
              borderColor: colors.gold[600],
              color: colors.gold[700],
              backgroundColor: 'rgba(255,255,255,0.7)',
            }}
          >
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
        {/* === Backdrop Overlay === */}
        <div
          className="fixed inset-0 z-40"
          style={{
            background:
              'linear-gradient(to bottom, rgba(200,161,40,0.15), rgba(200,161,40,0.05))',
            backdropFilter: 'blur(6px)',
          }}
        />

        {/* === Drawer Panel === */}
        <DialogPanel
          className="fixed inset-y-0 right-0 z-50 w-full max-w-sm shadow-xl sm:ring-1 sm:ring-gold-500"
          style={{
            background: `linear-gradient(to bottom right, ${colors.gold[100]}, white 45%, ${colors.gold[200]})`,
          }}
        >
          {/* === Drawer Header === */}
          <div className="flex items-center justify-between px-6 pt-6">
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
              className="rounded-md p-2 transition-colors"
              style={{ color: colors.gold[700] }}
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* === Drawer Navigation Links === */}
          <div className="mt-8 space-y-4 px-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-gold-50"
                style={{ color: colors.gold[700] }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* === Drawer Language Toggle === */}
          <div className="mt-8 border-t border-gold-200 pt-4 px-6">
            <button
              onClick={handleLanguageToggle}
              className="w-full px-4 py-2 text-sm font-semibold border-2 rounded-full transition-all duration-300 hover:shadow-md"
              style={{
                borderColor: colors.gold[600],
                color: colors.gold[700],
                backgroundColor: 'rgba(255,255,255,0.7)',
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
