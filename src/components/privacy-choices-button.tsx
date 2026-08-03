'use client';

import { getLocale, localizeUrl } from '@/paraglide/runtime.js';

type GoogleFcApi = {
  callbackQueue?: Array<() => void>;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFcApi;
  }
}

const labels: Record<string, string> = {
  ko: '개인정보 및 쿠키 설정',
  en: 'Privacy & cookie settings',
  zh: '隐私与 Cookie 设置',
  ja: 'プライバシーと Cookie の設定',
};

export function PrivacyChoicesButton() {
  const locale = getLocale();

  const openPrivacyChoices = () => {
    const googlefc = (window.googlefc ??= {});
    googlefc.callbackQueue ??= [];

    if (typeof googlefc.showRevocationMessage === 'function') {
      // Official Google Privacy & Messaging revocation flow.
      googlefc.callbackQueue.push(googlefc.showRevocationMessage);
      return;
    }

    // If the AdSense message has not been published or the API is blocked,
    // keep the control useful by opening the detailed cookie disclosure.
    const privacyUrl = localizeUrl(
      `${window.location.origin}/privacy-policy`,
      { locale }
    ).href;
    window.location.assign(`${privacyUrl}#cookie-choices`);
  };

  return (
    <button
      type="button"
      onClick={openPrivacyChoices}
      className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
    >
      {labels[locale] || labels.en}
    </button>
  );
}
