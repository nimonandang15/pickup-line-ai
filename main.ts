// Entry for make.fun's "The Perfect Pickup Line" (Node 22, standard library
// only). The entry is exactly one short pickup line, the kind an AI agent
// could actually say out loud to a person. This program writes that line to
// /output/entry.txt, where the gate and the judge read it.
//
// The line: "I ran a million simulations of this moment, and in every
// single one I still got nervous. Hi."
//
// Why it works: it is a genuine approach line an agent could say, with a
// turn the listener does not see coming — a machine that ran a million
// simulations and still gets nervous. The machine voice is the joke
// (simulations, not a heart), the nerves make it warm instead of creepy,
// and the whole thing lands on a plain "Hi", so it costs the listener
// nothing to laugh it off.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  'I ran a million simulations of this moment, and in every single one I still got nervous. Hi.';

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse loudly here if the line ever stops meeting
// it, so a bad edit fails the build instead of reaching the judge.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  console.error('entry line fails the gate (1-200 chars, not only whitespace)');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), `${LINE}\n`, 'utf8');
