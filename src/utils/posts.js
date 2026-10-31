/**
 * Date helpers — zero-dependency replacements for moment.js
 * Indonesian locale, UTC-based to match original behavior.
 */
const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const monthNames = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

/** "Senin, 1 Januari 2025" — replaces moment(d).locale('id').format('dddd, Do MMMM YYYY') */
export function formatDateId(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '';
  return `${dayNames[d.getUTCDay()]}, ${d.getUTCDate()} ${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** "1 Januari 2025" — short variant for OG images */
export function formatDateShort(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '';
  return `${d.getUTCDate()} ${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** Is this date less than 30 days ago? Replaces moment().subtract(1, 'months') comparison */
export function isNewest(dateStr) {
  if (!dateStr) return false;
  return new Date(dateStr).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000;
}

/** kebab-case — replaces lodash.kebabcase */
export function kebabCase(str) {
  if (!str) return '';
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

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

  const body = text.replace(/^---[\s\S]*?---/, '');
  const clean = body
    .replace(/<[^>]+>/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}
