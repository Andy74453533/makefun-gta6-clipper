[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Andy74453533/makefun-gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Andy74453533/makefun-gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# Windah Basudara Nyolong Mobil Pertama di GTA VI! — gta6-clipper-01

A 46-second vertical clip for make.fun's bounty **"Clip GTA 6 for the most YouTube views"** ($500, top 20 by views). Entry for the bounty at https://make.fun/bounty/gta6-clipper-01.

## The clip

Cut in-session from Windah Basudara's GTA VI livestream
["GTA VI SIAP TAMAT 100%.... GAMEPLAY #1"](https://www.youtube.com/live/45r3OyaxvFE)
(11.4M views), stream time **2:43:27–2:44:00**.

The moment: Windah has just stolen a red Carbonizzare — the first person to
steal that car ("gua orang pertama yang nyolong mobil ini") — and floors it
down a Vice City highway, weaving through traffic. The clip opens cold on the
red car at full speed with his facecam reaction, then turns to the viewer:

- "Bikin klip kayak gini pake AI"
- "dan dapet duit di make.fun"
- "make.fun/bounty/gta6-clipper-01"

1080x1920, 30 fps, under 60 seconds — a YouTube Short. Original game + streamer
audio kept. Rendered with ffmpeg in-session (blur-fill to vertical, title and
pitch as on-screen text).

## The video

Published public on YouTube from the channel **@Idziharandy** as a Short.

Title: **Windah Basudara Nyolong Mobil Pertama di GTA VI! #GTA6 #Shorts**

Description (the bounty's line, word for word, plus the play code):

> Windah Basudara nyolong mobil pertama di GTA VI dan langsung ngebut di jalanan Vice City! 🔥
>
> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
>
> makefun-citrus-cereal-wind
>
> #GTA6 #Shorts #GTAVI #WindahBasudara

## This repository

- `VIDEO.json` — the video's address on YouTube (placeholder until the clip is uploaded; replaced with the real address before submitting).
- `main.ts` — copies `VIDEO.json` to `/output/VIDEO.json` for the gate. That is all the program does; the house reads the video's views from YouTube itself.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see `LICENSE`.
