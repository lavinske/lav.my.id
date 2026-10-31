import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sharp from 'sharp';
import { readFileSync } from 'fs';

// Extract critical CSS: first 3KB of main stylesheet for above-the-fold
function extractCriticalCSS() {
  try {
    // Find the main CSS file in dist after build
    const cssDir = './dist/_astro';
    const cssFiles = require('fs').readdirSync(cssDir).filter(f => f.endsWith('.css'));
    if (cssFiles.length === 0) return '';
    
    // Take the largest CSS file (typically contains all critical + non-critical styles)
    const mainCss = cssFiles.sort((a, b) => 
      require('fs').statSync(`${cssDir}/${b}`).size - require('fs').statSync(`${cssDir}/${a}`).size
    )[0];
    
    const fullCss = readFileSync(`${cssDir}/${mainCss}`, 'utf8');
    // Extract first 3000 chars (covers reset, typography, layout)
    return fullCss.substring(0, 3000).replace(/\s+/g, ' ').trim();
  } catch (err) {
    return '';
  }
}

// Remark plugin: add width/height/loading/decoding/srcset to markdown images using sharp metadata
function remarkImageDimensions() {
  return async (tree) => {
    const visit = async (node) => {
      if (node.type === 'image' && node.url && !node.url.startsWith('http')) {
        try {
          const filePath = node.url.replace(/^\//, './public/');
          const metadata = await sharp(filePath).metadata();
          node.data = node.data || {};
          node.data.hProperties = node.data.hProperties || {};
          node.data.hProperties.width = metadata.width;
          node.data.hProperties.height = metadata.height;
          node.data.hProperties.loading = 'lazy';
          node.data.hProperties.decoding = 'async';
          // Add srcset for 1.5x and 2x (for retina displays)
          // Format: /images/hero.jpg 1x, /images/hero@2x.jpg 2x
          // Note: requires @2x variants to exist; graceful fallback to 1x only
          const withoutExt = node.url.substring(0, node.url.lastIndexOf('.'));
          const ext = node.url.substring(node.url.lastIndexOf('.'));
          node.data.hProperties.srcSet = `${node.url} 1x, ${withoutExt}@2x${ext} 2x`;
        } catch (err) {
          // Skip if metadata unavailable (image may be in content submodule)
        }
      }
      if (node.children) {
        for (const child of node.children) {
          await visit(child);
        }
      }
    };
    await visit(tree);
  };
}

function remarkImagePaths() {
  return (tree) => {
    function visit(node) {
      if (node.type === 'image' && node.url) {
        node.url = node.url.replace(/^\.\/images\//, '/images/').replace(/^\.\/thumbnails\//, '/thumbnails/');
      }
      if (node.children) {
        node.children.forEach(visit);
      }
    }
    visit(tree);
  };
}

export default defineConfig({
  site: 'https://lav.my.id',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkImagePaths, remarkImageDimensions],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
