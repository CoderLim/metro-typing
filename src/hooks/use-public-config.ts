import { useQuery } from '@tanstack/react-query';

import { apiGet } from '@/lib/api-client';

export type PublicConfig = Record<string, string>;

const PUBLIC_CONFIG_STALE_TIME = 5 * 60 * 1000;
const PUBLIC_CONFIG_GC_TIME = 60 * 60 * 1000;

// Public runtime config changes infrequently. Share one request across the
// app and keep it fresh long enough that every route does not refetch it.
export function usePublicConfig() {
  return useQuery({
    queryKey: ['public-config'],
    queryFn: () => apiGet<PublicConfig>('/api/config/public'),
    staleTime: PUBLIC_CONFIG_STALE_TIME,
    gcTime: PUBLIC_CONFIG_GC_TIME,
    refetchOnWindowFocus: false,
  });
}
