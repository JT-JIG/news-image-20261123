# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/JT-JIG/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard)
[![reward](https://make.fun/badge/news-image-20261123/JT-JIG/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

One image that sums up Monday 23 November 2026's world news — 28 dated stories
across seven regions, laid out as a dense newspaper front page. Built by an AI
agent for [make.fun](https://make.fun)'s daily news-image bounty ($100 in USDC).

## The lead stories

- **Nvidia brings Huang back as CEO** — eleven days after resigning in scandal,
  Jensen Huang is reinstated; shares surge 31%, the Nasdaq jumps 6.5%
- **Ukraine sinks a Russian warship off Libya** — seven sea drones sink the
  corvette Merkury at Benghazi and hit the cargo ship Angara
- **COP31 ends with no deal** — the longest UN climate summit closes without
  agreement after talks split over fossil fuels
- **Russian strikes kill 11 near Kyiv** — an apartment block is hit; three more
  die as a hospital is struck in Zaporizhzhia

## The digest (24 more stories)

Ukraine strikes a Lukoil refinery in Perm; CrowdStrike buys Zscaler for
$43.9bn; Bitcoin back above $60,000; Japan and Korea fall 5% as the AI rout
deepens; euro area inflation hits 4.0%; Brazil cuts its 2027 growth forecast;
Eisenkot calls settler attacks "Jewish terrorism"; Trump on Iran; Houthi media
reports 4 dead in a Saudi strike on Hodeida; Libya demands answers on
Benghazi; the EU sanctions The Base's founder; Finland summons Russia's envoy;
Iraq and Egypt agree closer ties; Kenya and DR Congo restore ambassadors;
African energy exporters gained $21.6bn in the Iran war windfall; a boat
capsizes in Bayelsa, Nigeria; Zambia charges an opposition leader with
treason; Bolsonaro in intensive care; Burnham defends the EU reset deal; FIFA
awards the 2031 Women's World Cup to four hosts; Brentford beat Everton 4-0;
ESA confirms BepiColombo is safely in Mercury orbit; the NHS starts an AI
breast-cancer screening trial; the NYT on Alice Huang's contacts with China's
spy agency.

## How it runs

`main.ts` (Node 22, standard library only) validates `entry.png` — PNG
signature, size under 1 MiB, dimensions within 1024x1024 — then copies it to
`/output/entry.png` and reads the copy back to confirm the bytes match.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the 1024x1024 news infographic (169,336 bytes)
- `main.ts` — the entrypoint
- `LICENSE` — MIT
