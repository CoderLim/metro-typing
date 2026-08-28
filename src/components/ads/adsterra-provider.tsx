import { createContext, useContext, type ReactNode } from 'react';

import {
  normalizeAdsterraConfig,
  type AdsterraConfig,
} from '@/components/ads/adsterra-config';

const emptyConfig = normalizeAdsterraConfig({});

const AdsterraConfigContext = createContext<AdsterraConfig>(emptyConfig);

export function AdsterraProvider({
  config,
  children,
}: {
  config: AdsterraConfig;
  children: ReactNode;
}) {
  return (
    <AdsterraConfigContext.Provider value={config}>
      {children}
    </AdsterraConfigContext.Provider>
  );
}

export function useAdsterraConfig(): AdsterraConfig {
  return useContext(AdsterraConfigContext);
}
