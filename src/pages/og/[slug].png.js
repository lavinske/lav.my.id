import sharp from 'sharp';
import { getAllContent, getReadingTime } from '../../utils/posts';
import moment from 'moment';
import 'moment/locale/id';

export async function getStaticPaths() {
  const all = getAllContent();
  const posts = all.filter((item) => item.frontmatter?.template === 'post' && item.frontmatter.slug);
  return posts.map((post) => ({
    params: { slug: post.frontmatter.slug },
    props: { post },
  }));
}

function escapeXml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>'"]/g, (tag) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&apos;',
    '"': '&quot;',
  }[tag] || tag));
}

function wrapText(text, maxChars = 28) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length <= maxChars) {
      current = (current + ' ' + word).trim();
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 4); // Max 4 lines
}

export async function GET({ props }) {
  const { post } = props;
  const { frontmatter } = post;
  const title = frontmatter.title || 'Artikel';
  const category = (frontmatter.categories && frontmatter.categories[0]) || 'Teknologi';
  const dateStr = frontmatter.date ? moment.utc(frontmatter.date).locale('id').format('Do MMMM YYYY') : '';
  const readTime = getReadingTime(post);

  const lines = wrapText(title, 26);
  const tspans = lines
    .map((line, i) => `<tspan x="90" dy="${i === 0 ? 0 : 70}">${escapeXml(line)}</tspan>`)
    .join('');

  const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f171e"/>
        <stop offset="50%" stop-color="#162430"/>
        <stop offset="100%" stop-color="#1c2f3e"/>
      </linearGradient>
      <linearGradient id="bar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#2B5B84"/>
        <stop offset="100%" stop-color="#88C0D0"/>
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)"/>

    <!-- Top Accent Bar -->
    <rect x="0" y="0" width="1200" height="8" fill="url(#bar)"/>

    <!-- Category Pill -->
    <rect x="90" y="70" width="120" height="32" rx="6" fill="#2B5B84" opacity="0.35"/>
    <text x="150" y="91" fill="#88C0D0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" text-anchor="middle" letter-spacing="1">ARTIKEL</text>
    <text x="230" y="91" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16">•  ${escapeXml(category)}</text>

    <!-- Main Title -->
    <text x="90" y="200" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="bold">
      ${tspans}
    </text>

    <!-- Divider Line -->
    <line x1="90" y1="480" x2="1110" y2="480" stroke="#2B5B84" stroke-width="1.5" opacity="0.4"/>

    <!-- Author & Persona -->
    <g transform="translate(90, 512)">
      <circle cx="28" cy="28" r="26" fill="#2B5B84"/>
      <text x="28" y="35" fill="#88C0D0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">SL</text>

      <text x="70" y="22" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="600">Steven Lavinske</text>
      <text x="70" y="45" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15">Sysadmin di bank terbesar di Indonesia</text>
    </g>

    <!-- Site Branding & Details -->
    <g transform="translate(1110, 526)" text-anchor="end">
      <text x="0" y="0" fill="#88C0D0" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="22" font-weight="bold">lav.my.id</text>
      <text x="0" y="24" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15">${escapeXml(readTime)} • ${escapeXml(dateStr)}</text>
    </g>
  </svg>`;

  const buffer = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(buffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
