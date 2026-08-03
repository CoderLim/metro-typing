import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const messagesDir = path.join(rootDir, 'messages');
const overridesDir = path.join(messagesDir, 'overrides');
const sourcePath = path.join(messagesDir, 'en.json');
const targetLocales = ['zh', 'ja'];

const parseJson = async (filePath) =>
  JSON.parse(await readFile(filePath, 'utf8'));

const placeholders = (value) =>
  typeof value === 'string'
    ? [...value.matchAll(/\{[^{}]+\}/g)].map(([match]) => match).sort()
    : [];

const sameArray = (left, right) =>
  left.length === right.length &&
  left.every((value, index) => value === right[index]);

async function loadOverrides(locale) {
  const localeDir = path.join(overridesDir, locale);
  const files = (await readdir(localeDir))
    .filter((file) => file.endsWith('.json'))
    .sort();

  if (files.length === 0) {
    throw new Error(`No override files found for locale "${locale}"`);
  }

  const merged = {};
  for (const file of files) {
    const filePath = path.join(localeDir, file);
    const fragment = await parseJson(filePath);
    for (const [key, value] of Object.entries(fragment)) {
      if (Object.hasOwn(merged, key)) {
        throw new Error(`Duplicate override key "${key}" in ${filePath}`);
      }
      merged[key] = value;
    }
  }
  return merged;
}

const source = await parseJson(sourcePath);
const sourceKeys = Object.keys(source);

for (const locale of targetLocales) {
  const overrides = await loadOverrides(locale);
  const unknownKeys = Object.keys(overrides).filter(
    (key) => !Object.hasOwn(source, key)
  );

  if (unknownKeys.length > 0) {
    throw new Error(
      `${locale}: unknown override keys: ${unknownKeys.join(', ')}`
    );
  }

  const output = Object.fromEntries(
    sourceKeys.map((key) => [
      key,
      key === '$schema' || !Object.hasOwn(overrides, key)
        ? source[key]
        : overrides[key],
    ])
  );
  const outputKeys = Object.keys(output);

  if (!sameArray(sourceKeys, outputKeys)) {
    throw new Error(`${locale}: generated key order does not match en.json`);
  }

  for (const key of sourceKeys) {
    const expected = placeholders(source[key]);
    const actual = placeholders(output[key]);
    if (!sameArray(expected, actual)) {
      throw new Error(
        `${locale}: placeholder mismatch for "${key}": ` +
          `${expected.join(', ')} !== ${actual.join(', ')}`
      );
    }
  }

  const targetPath = path.join(messagesDir, `${locale}.json`);
  await writeFile(targetPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  console.log(
    `[i18n] generated ${path.relative(rootDir, targetPath)}: ` +
      `${outputKeys.length} keys, ${Object.keys(overrides).length} translated overrides`
  );
}
