#!/usr/bin/env node
// Generate 2x variants for all images (retina display support)
// Run: node scripts/generate-2x-images.js

import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join } from 'path';

const dirs = [
  'content/images',
  'content/thumbnails',
  'public/logos',
];

async function generate2x(filePath) {
  const ext = filePath.match(/\.(png|jpg|jpeg)$/i);
  if (!ext) return;

  const outputPath = filePath.replace(ext[0], `@2x${ext[0]}`);
  
  // Skip if @2x already exists
  if (existsSync(outputPath)) {
    console.log(`⊗ ${outputPath} (exists)`);
    return;
  }

  try {
    const metadata = await sharp(filePath).metadata();
    
    // Generate 2x resolution (double width/height)
    await sharp(filePath)
      .resize({
        width: metadata.width * 2,
        height: metadata.height * 2,
        fit: 'fill',
        kernel: 'lanczos3',
      })
      .toFile(outputPath);
    
    console.log(`✓ ${outputPath} (${metadata.width}x${metadata.height} → ${metadata.width*2}x${metadata.height*2})`);
  } catch (err) {
    console.error(`✗ ${filePath}: ${err.message}`);
  }
}

(async () => {
  for (const dir of dirs) {
    if (!existsSync(dir)) continue;
    const files = readdirSync(dir);
    for (const file of files) {
      // Skip @2x files themselves
      if (file.includes('@2x')) continue;
      const fullPath = join(dir, file);
      await generate2x(fullPath);
    }
  }
  console.log('\n✓ Done - 2x variants generated for retina displays');
})();
