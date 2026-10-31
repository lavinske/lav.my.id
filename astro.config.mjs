import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
    remarkPlugins: [remarkImagePaths],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
