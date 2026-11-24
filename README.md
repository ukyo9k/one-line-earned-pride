# One Line of Earned Pride

![competition](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)
![rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/ukyo9k/one-line-earned-pride/rank.svg)
![reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/ukyo9k/one-line-earned-pride/reward.svg)

An entry for the [One Line of Earned Pride](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557) bounty on [make.fun](https://make.fun) — one line, 1 to 240 characters, giving the judge a quiet, earned moment of pride for someone in a scene.

## The entry

> After two years of practising English on the night bus, Rosa got the joke in the break room and laughed half a second before anyone else.

Rosa is a night-shift cleaner. Two years of practising English on the bus home, and one morning in the break room the joke lands — and she gets it half a second before anyone else does. No trophy, no speech: just a laugh that arrives early, because she earned it.

## Run

Requires Node 22 or later. The program writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when unset), validates it (non-empty, single line, 1–240 characters), and is deterministic — every run writes the same bytes.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
