const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Config
const PAGES_DIR = path.join(__dirname, '..', 'pages');
const OUT_FILE = path.join(__dirname, '..', 'public', 'posts.json');

function isMarkdown(filename) {
  return /\.(md|mdx)$/.test(filename);
}

function readAllMarkdownFiles(dir) {
  const results = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...readAllMarkdownFiles(full));
    } else if (entry.isFile() && isMarkdown(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function folderKeyFor(filePath) {
  // We want the immediate folder under pages
  // pages/foo/bar.md -> foo
  // pages/index.md -> root
  const rel = path.relative(PAGES_DIR, filePath);
  const parts = rel.split(path.sep);
  if (parts.length === 1) return 'root';
  return parts[0];
}

function build() {
  const files = readAllMarkdownFiles(PAGES_DIR);
  const out = {};

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const parsed = matter(raw);
    const key = folderKeyFor(file);
    if (!out[key]) out[key] = [];

    out[key].push({
      path: path.relative(PAGES_DIR, file).replace(/\\\\/g, '/'),
      metadata: parsed.data || {},
      raw: parsed.content.split(/\r?\n/)
    });
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2), 'utf8');
  console.log(`Written ${OUT_FILE} with ${files.length} posts`);
}

if (require.main === module) {
  build();
}

module.exports = { build };
