const withMarkdoc = require('@markdoc/next.js');

/* config: https://markdoc.io/docs/nextjs#options */

module.exports =
  withMarkdoc({ mode: 'static' })({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
    output: "export",
    reactStrictMode: true,
  });
