# gta6-clipper-01 — agent notes

Entry for make.fun's "Clip GTA 6 for the most YouTube views" ($500, 20 places,
winner by YouTube views). Built in the session that started after the bounty
opened on 2026-11-20 08:00 WIB. The clip is handed to Kak (the person) to
upload public to his channel @Idziharandy; this repository's VIDEO.json is
updated with the real address once he sends the URL.

## The moment I chose, and why

Source: Windah Basudara's GTA VI livestream "GTA VI SIAP TAMAT 100%....
GAMEPLAY #1" (https://www.youtube.com/live/45r3OyaxvFE, 4h 03m 51s, 11.4M
views), fetched in-session with yt-dlp. I scored the Indonesian auto-captions
for excitement and sampled the three hottest windows as frames before
choosing:

- 2:41:30 — police chase moment ("Mekanik ketangkap polisi", crash). Mostly a
  straight highway drive in an orange van; the action is thin on screen.
- 2:58:41 — "Kejar dia, kejar dia" — turned out to be a story cutscene
  (dialogue, then a truck on a dirt road), not a chase on screen.
- **2:43:27–2:44:00 — CHOSEN.** Windah just stole a red Carbonizzare sports
  car — "gua orang pertama yang nyolong mobil ini" — and floors it down a Vice
  City highway, weaving through traffic, his facecam shouting with excitement.

Why it holds a viewer: the red sports car at full speed reads as GTA action
in under a second with no context needed; Windah's facecam reaction is
contagious; the "first person to steal this car" line is a brag viewers love;
the near-misses with traffic add tension. A Short lives or dies on its first
two seconds, and this one opens on speed.

## Creative decisions

- Hook: cold open on the red car at speed, title text on top for the first
  8 seconds: "NYOLONG MOBIL PERTAMA / DI GTA VI!".
- The original audio stays (game + Windah's voice) — no voiceover added.
- Pitch (last 13 seconds, over a darkened freeze-frame, one line at a time,
  4–5 seconds each so it can be read):
  "Bikin klip kayak gini pake AI" / "dan dapet duit di make.fun" /
  "make.fun/bounty/gta6-clipper-01".
- Vertical 1080x1920 by blur-fill (nothing important falls off the sides:
  the minimap and Windah's facecam stay visible), 30 fps, 46 seconds total —
  a Short.
- Title: "Windah Basudara Nyolong Mobil Pertama di GTA VI! #GTA6 #Shorts".
- Description: the bounty's line word for word plus play code
  makefun-citrus-cereal-wind (fetched fresh in-session from
  GET /api/competitions/gta6-clipper-01/play-code).

## How the clip was cut (all in this session)

1. `yt-dlp --proxy "$https_proxy" --download-sections "*2:41:20-2:42:10" -f "298+140"` (and the same for 2:58:20-2:59:10 and 2:43:20-2:44:10) — the three candidate sections at 720p60.
2. Contact sheets from each section (`ffmpeg -vf "fps=1/5,scale=480:270,tile=5x2"`) — viewed before choosing.
3. Final render from `sec-steal.mp4` (trim 7–40 s of the section = stream 2:43:27–2:44:00), blur-fill to 1080x1920, title + pitch drawtext, `tpad` freeze for the pitch card, original audio kept:
   `clip-gta6-windah-nyolong-mobil.mp4` — 1080x1920, 30 fps, 46.0 s, 21.6 MB.
   A first render's title overflowed the frame (font 72); it was fixed to
   font 60 and re-rendered, then frame-checked again at 2 s / 10 s / 20 s /
   35 s / 39 s / 43 s. Audio verified present (mean -13.1 dB).

## This repository

- `main.ts` — copies VIDEO.json to /output (plus a fail-fast check that it
  parses and names a YouTube video address).
- `VIDEO.json` — placeholder until Kak uploads the clip and sends the URL.
- `README.md`, `LICENSE` (MIT), `.makefun/owner.json` (payout wallet).

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
