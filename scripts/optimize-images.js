#!/usr/bin/env node
// One-off script: recompress PNG/JPG images in place with sharp
// Run: node scripts/optimize-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// content/thumbnails and content/images are the source of truth —
// public/thumbnails and public/images get overwritten by the prebuild
// script on every build. public/logos has no content/ counterpart.
const dirs = [
  'content/thumbnails',
  'content/images',
  'public/logos',
];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const stat = fs.statSync(filePath);
  const sizeBefore = stat.size;

  try {
    const img = sharp(filePath);
    const meta = await img.metadata();
    
    // Resize if absurdly large (>2000px either dimension)
    let pipeline = img.resize({
      width: meta.width > 2000 ? 2000 : undefined,
      height: meta.height > 2000 ? 2000 : undefined,
      fit: 'inside',
      withoutEnlargement: true,
    });

    if (ext === '.png') {
      pipeline = pipeline.png({ quality: 85, compressionLevel: 9, palette: true });
    } else {
      pipeline = pipeline.jpeg({ quality: 85, progressive: true, mozjpeg: true });
    }

    const tempPath = filePath + '.tmp';
    await pipeline.toFile(tempPath);
    
    const sizeAfter = fs.statSync(tempPath).size;
    if (sizeAfter < sizeBefore) {
      fs.renameSync(tempPath, filePath);
      console.log(`✓ ${path.relative(process.cwd(), filePath)}: ${sizeBefore} → ${sizeAfter} (-${Math.round((1 - sizeAfter/sizeBefore)*100)}%)`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`✗ ${path.relative(process.cwd(), filePath)}: kept original (${sizeBefore}b)`);
    }
  } catch (err) {
    console.error(`✗ ${path.relative(process.cwd(), filePath)}: ${err.message}`);
  }
}

(async () => {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir, { recursive: true });
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isFile()) {
        await optimizeImage(fullPath);
      }
    }
  }
  console.log('\n✓ Done');
})();
