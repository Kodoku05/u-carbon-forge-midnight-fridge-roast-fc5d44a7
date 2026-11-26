import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MIN_CHARACTERS = 1;
const MAX_CHARACTERS = 200;
const OUTPUT_FILE = 'entry.txt';

const line = 'My smart fridge locks after midnight. Apparently my leftover lasagna is in witness protection.';
assert(Array.from(line).length >= MIN_CHARACTERS && Array.from(line).length <= MAX_CHARACTERS);
assert(!/[\r\n]/u.test(line));

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, OUTPUT_FILE), line, 'utf8');
