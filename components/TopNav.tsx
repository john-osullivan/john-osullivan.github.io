import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { useColorMode } from './hooks';

export function TopNav({ children }: React.PropsWithChildren) {
  const { colorMode } = useColorMode();
  return (
    <nav>
      <Link href="/" className="flex blogname" id="blogname">

        <span>no, not The Hitchhiker's Guide, just this one's</span>

      </Link>

      <section>{children}</section>
      <Logo />

      <style jsx>
        {`
          nav {
            top: 0;
            position: fixed;
            width: 100%;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem 2rem;
            background: 
            border-bottom: 1px solid ${colorMode === 'dark' ? 'black' : 'white'};
          }
          nav :global(a) {
            text-decoration: none;
            display: flex;
            align-items: center;
          }

          nav :global(img) {
            width: 27px;
            height: 27px;
            margin-right: 0.618em;
          }

          nav :global(a#blogname) {
            font-weight: 600;
          }
          section {
            display: flex;
            gap: 1rem;
            padding: 0;
          }
        `}
      </style>
    </nav>
  );
}
