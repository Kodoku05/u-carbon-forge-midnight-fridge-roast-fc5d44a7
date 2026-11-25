import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = 'My smart fridge locks after midnight. Apparently my leftover lasagna is in witness protection.';
assert(Array.from(line).length >= 1 && Array.from(line).length <= 200);
assert(!/[\r\n]/u.test(line));

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), line, 'utf8');
