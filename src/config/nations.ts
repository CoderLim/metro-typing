export const NATIONS = {
  kr: {
    src: 'https://metrotyping.kr/',
  },
  cn: {
    src: 'https://typing.ryekee.com/',
  },
  jp: {
    src: 'https://densyatyping.com/',
  },
} as const;

export type NationCode = keyof typeof NATIONS;

export const NATION_CODES = Object.keys(NATIONS) as NationCode[];

export const DEFAULT_NATION: NationCode = 'kr';

export function isNationCode(value: string): value is NationCode {
  return value in NATIONS;
}

export function nationFromPathname(pathname: string): NationCode {
  const match = pathname.match(/^\/nation\/([^/]+)/);
  if (match && isNationCode(match[1])) return match[1];
  return DEFAULT_NATION;
}

export function hrefForNation(code: NationCode): string {
  return code === DEFAULT_NATION ? '/' : `/nation/${code}`;
}
