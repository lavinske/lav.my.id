import rss from '@astrojs/rss';
import config from '../config';
import { getPosts } from '../utils/posts';

export async function GET(context) {
  const posts = getPosts();
  return rss({
    title: config.siteTitle,
    description: config.siteDescription,
    site: context.site || config.siteUrl,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.date),
      description: post.frontmatter.description || post.frontmatter.title,
      link: `/${post.frontmatter.slug}/`,
    })),
  });
}
