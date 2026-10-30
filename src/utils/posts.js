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

export function getReadingTime(entryOrText) {
  let text = '';
  if (typeof entryOrText === 'string') {
    text = entryOrText;
  } else if (entryOrText && typeof entryOrText.rawContent === 'function') {
    text = entryOrText.rawContent();
  } else if (entryOrText && typeof entryOrText.compiledContent === 'function') {
    text = entryOrText.compiledContent();
  } else if (entryOrText && entryOrText.body) {
    text = entryOrText.body;
  }

  // Remove frontmatter if present
  const body = text.replace(/^---[\s\S]*?---/, '');
  // Clean markdown tags and code fences
  const clean = body
    .replace(/<[^>]+>/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}
