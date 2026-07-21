import { Check, ChevronDown, MapPin } from 'lucide-react';

import { tDynamic } from '@/core/i18n/dynamic';
import { usePathname, useRouter } from '@/core/i18n/navigation';
import {
  hrefForNation,
  NATION_CODES,
  nationFromPathname,
} from '@/config/nations';
import { cn } from '@/lib/utils';
import { m } from '@/paraglide/messages.js';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function NationSelector({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const nation = nationFromPathname(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'text-muted-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-8 items-center gap-1 rounded-md px-2 text-sm outline-none',
          className
        )}
        aria-label={m['landing.game.nation_nav']()}
      >
        <MapPin className="size-3.5 shrink-0" />
        <span>{tDynamic(`landing.game.nation.${nation}`)}</span>
        <ChevronDown className="size-3.5 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {NATION_CODES.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => {
              if (code !== nation) router.push(hrefForNation(code));
            }}
            className="flex items-center justify-between gap-2"
          >
            {tDynamic(`landing.game.nation.${code}`)}
            {code === nation && <Check className="size-3.5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
