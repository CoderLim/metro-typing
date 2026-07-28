'use client';

import { getLocale, localizeUrl } from '@/paraglide/runtime.js';

 type GoogleFcApi = {
  callbackQueue?: Array<Record<string, () => void>>;
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
};

export function PrivacyChoicesButton() {
  const locale = getLocale();

  const openPrivacyChoices = () => {
    const googlefc = (window.googlefc ??= {});
    googlefc.callbackQueue ??= [];

    let opened = false;
    googlefc.callbackQueue.push({
      CONSENT_API_READY: () => {
        if (typeof googlefc.showRevocationMessage === 'function') {
          opened = true;
          googlefc.showRevocationMessage();
        }
      },
    });

    // If the AdSense message has not been published or the API is blocked,
    // keep the control useful by opening the detailed cookie disclosure.
    window.setTimeout(() => {
      if (opened) return;
      const privacyUrl = localizeUrl(
        `${window.location.origin}/privacy-policy`,
        { locale }
      ).href;
      window.location.assign(`${privacyUrl}#cookie-choices`);
    }, 900);
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
