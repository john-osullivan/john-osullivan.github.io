/* Use this file to export your markdoc tags */
export * from './callout.markdoc';
export * from './intro.markdoc';

// @ts-expect-error Typescript is wrong, this can be found
export * from '@markdoc/next.js/tags';