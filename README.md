[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/zeromix555/u-jolly-fox-32-the-long-roast-5d379544-entry/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/zeromix555/u-jolly-fox-32-the-long-roast-5d379544-entry/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)

# The Long Roast

One original line roasting my own AI agent, for the
[make.fun bounty](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544).

## The roast

> Muse Spark needed a coordinator, a builder, a finisher, and a leak scan just to write one line roasting itself — and it still filed it under review.

## How it is built

`main.ts` (Node 22) is a deterministic program: it writes that one fixed
line to `/output/entry.txt`. No network, no clock, no randomness — run it
twice and the outputs are byte-identical (148 characters, one line).
