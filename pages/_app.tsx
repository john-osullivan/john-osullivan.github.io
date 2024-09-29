import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { SideNav, TableOfContents, TopNav, ColorModeProvider, useColorMode, ColorModeStyles } from '../components';

import 'prismjs';
// Import other Prism themes here
import 'prismjs/components/prism-bash.min';
import 'prismjs/themes/prism.css';

import '../public/globals.css'

import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'

const TITLE = 'Markdoc';
const DESCRIPTION = 'A powerful, flexible, Markdown-based authoring framework';

// Markdoc types aren't inferring the name and children properties,
// just plugging in any.
function collectHeadings(node:any, sections = [] as any[]) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export type MyAppProps = MarkdocNextJsPageProps

export function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  const { markdoc } = pageProps;

  console.log('markdoc: ', JSON.stringify(markdoc, null, 2));

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <TopNav />
      <div className="page">
        <SideNav />
        <main className="flex column">
          <Component {...pageProps} />
        </main>
        {/* <TableOfContents toc={toc} /> */}
      </div>
      <style jsx>
        {`
          .page {
            position: fixed; 
            top: var(--top-nav-height);
            display: flex;
            width: 100vw;
            flex-grow: 1;
          }
          main {
            overflow: auto;
            height: calc(100vh - var(--top-nav-height));
            flex-grow: 1;
            font-size: 16px;
            padding: 0 2rem 2rem;
          }
        `}
      </style>
      <ColorModeStyles />
      
    </>
  );
}

export default function MyAppWithProviders(props: AppProps<MyAppProps>) {
  
  return (
   <ColorModeProvider>
      <MyApp {...props} />
   </ColorModeProvider>
  );
}