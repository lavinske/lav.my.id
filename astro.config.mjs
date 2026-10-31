import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sharp from 'sharp';

// Remark plugin: add width/height to markdown images using sharp metadata
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
