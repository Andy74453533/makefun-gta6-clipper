// gta6-clipper-01 entry: "Windah Basudara Nyolong Mobil Pertama di GTA VI!"
// The entry is the YouTube Short itself: a 46s vertical clip cut in-session from
// Windah Basudara's GTA VI livestream "GTA VI SIAP TAMAT 100%.... GAMEPLAY #1"
// (stream time 2:43:27-2:44:00 — the red Carbonizzare heist drive), with the
// make.fun pitch as on-screen text at the end. This program only hands the
// video's address to the gate: it copies VIDEO.json from the repository root
// to /output/VIDEO.json, where the gate reads it. That is all it has to do.
// The video's views are read by the house from YouTube itself; nothing this
// program writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(BOT_DIR, 'VIDEO.json');

// Fail fast on a broken VIDEO.json instead of copying a file the gate
// would refuse: it must parse as JSON and carry the video's address
// as a string under "url".
let videoUrl: unknown;
try {
  videoUrl = (JSON.parse(readFileSync(videoPath, 'utf8')) as { url?: unknown }).url;
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof videoUrl !== 'string' || videoUrl.length === 0) {
  console.error('VIDEO.json has no "url" string: put the video address in it first.');
  process.exit(1);
}
const YOUTUBE_VIDEO = /^https:\/\/(www\.|m\.)?youtube\.com\/(shorts\/|watch\?v=)|^https:\/\/youtu\.be\//;
if (!YOUTUBE_VIDEO.test(videoUrl)) {
  console.error(
    `VIDEO.json "url" is not a YouTube video address (${videoUrl}): ` +
      'expected https://www.youtube.com/shorts/<id>, https://www.youtube.com/watch?v=<id> or https://youtu.be/<id>.',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
