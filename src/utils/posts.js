import moment from 'moment';

export function getAllContent() {
  const markdownFiles = import.meta.glob('/content/*.md', { eager: true });
  return Object.values(markdownFiles);
}

export function getPosts() {
  const all = getAllContent();
  return all
    .filter((item) => item.frontmatter?.template === 'post')
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB.getTime() - dateA.getTime();
    });
}

export function getPopularPosts() {
  return getPosts().filter((post) =>
    post.frontmatter?.categories?.includes('populer')
  );
}

export function resolveThumbnail(thumb) {
  if (!thumb) return null;
  return thumb.replace(/^\.\/thumbnails\//, '/thumbnails/').replace(/^\.\/images\//, '/images/');
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  return moment(dateStr).format('Do MMMM YYYY');
}
