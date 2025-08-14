const chokidar = require('chokidar');
const path = require('path');
const { build } = require('./build-posts');

const PAGES_GLOB = path.join(__dirname, '..', 'pages', '**', '*.{md,mdx}');

console.log('Starting watcher for pages...');

const watcher = chokidar.watch(PAGES_GLOB, {
  ignoreInitial: false,
});

let pending = false;
let timer = null;

function scheduleBuild() {
  if (pending) return;
  pending = true;
  clearTimeout(timer);
  timer = setTimeout(() => {
    try {
      build();
    } catch (err) {
      console.error('Error building posts:', err);
    }
    pending = false;
  }, 100);
}

watcher.on('add', scheduleBuild);
watcher.on('change', scheduleBuild);
watcher.on('unlink', scheduleBuild);

watcher.on('ready', () => console.log('Watcher ready - watching pages directory'));

process.on('SIGINT', () => {
  watcher.close();
  process.exit(0);
});
