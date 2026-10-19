import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Vector letterforms keep the monogram independent of installed fonts.
const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192">
  <rect width="192" height="192" rx="36" fill="#101413"/>
  <path fill="#00E676" d="M28 48h58v18H48v21h32v18H48v21h38v18H28z M96 144l30-96h22l30 96h-21l-6-22h-29l-6 22z M127 104h19l-9-35z"/>
</svg>`);
const png = await sharp(svg).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = 192;
header[7] = 192;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
await writeFile(new URL("../src/app/favicon.ico", import.meta.url), Buffer.concat([header, png]));
await sharp(svg).resize(180, 180).png().toFile(fileURLToPath(new URL("../src/app/apple-icon.png", import.meta.url)));
