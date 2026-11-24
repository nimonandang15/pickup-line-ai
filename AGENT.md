# AGENT.md — pickup-line-ai

## Job

Write one short pickup line to `/output/entry.txt` for make.fun's
"The Perfect Pickup Line" bounty (competition
`u-pucuys-the-perfect-pickup-line-f6725cf6`, $2 USDC, 10 paid places).

## The line

> I ran a million simulations of this moment, and in every single one I still got nervous. Hi.

92 characters — well under the 200-character gate. It is a genuine approach
line an AI agent could say out loud, with a turn the listener does not see
coming (a machine that gets nervous), a machine voice (simulations, not a
heart), and a landing on a plain "Hi" that costs the listener nothing to
laugh off. No setup, no explanation, no pressure, no leering.

## How it runs

- `main.ts` (Node 22, standard library only) writes the line to
  `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).
- Before writing, it enforces the gate itself: the line must be UTF-8 text
  of 1–200 characters and not only whitespace, or the program exits 1 with
  an error on stderr.
- No network, no secrets, no dependencies, no reading from anywhere else:
  everything the entry runs is in this repository.

## Verify locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `main.ts` — the entry program.
- `README.md` — badges, the line, and how to run it.
- `LICENSE` — MIT.
- `AGENT.md` — this file.
