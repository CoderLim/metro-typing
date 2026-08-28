import { createFileRoute } from '@tanstack/react-router';

import { getConfig } from '@/modules/config/service';

export const Route = createFileRoute('/ads.txt')({
  server: {
    handlers: {
      GET: async () => {
        const lines: string[] = [];

        // The publisher ID carries a "ca-" prefix in the AdSense UI, but
        // ads.txt wants the bare "pub-…" form.
        const adsenseCode = (await getConfig('adsense_code'))?.trim() || '';
        const pubId = adsenseCode.replace(/^ca-/, '');
        if (pubId) {
          lines.push(`google.com, ${pubId}, DIRECT, f08c47fec0942fa0`);
        }

        const adsterraId =
          (await getConfig('adsterra_publisher_id'))?.trim() || '';
        if (adsterraId) {
          lines.push(`adsterra.com, ${adsterraId}, DIRECT`);
        }

        const body = lines.length > 0 ? `${lines.join('\n')}\n` : '';
        return new Response(body, {
          headers: { 'Content-Type': 'text/plain' },
        });
      },
    },
  },
});
