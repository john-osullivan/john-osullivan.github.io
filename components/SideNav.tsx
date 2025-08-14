import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useColorMode } from './hooks';
import clsx from 'clsx';

const items = [
  {
    title: '~ $',
    links: [
      { href: '/', children: "./index" },
      { href: '/whoami', children: "./whoami" },
    ],
  },
];

interface LinkItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  links: LinkItem[];
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function SideNav() {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [folders, setFolders] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch('/posts.json', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (!mounted) return;
        const keys = Object.keys(data || {});
        keys.sort((a, b) => {
          if (a === 'root') return -1;
          if (b === 'root') return 1;
          return a.localeCompare(b);
        });
        setFolders(keys);
      } catch (e) {
        // ignore
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const folderLabel = (f: string) => (f === 'root' ? 'Home' : f.replace(/-/g, ' '));
  const folderHref = (f: string) => (f === 'root' ? '/' : `/${f}`);

  return (
    <nav className="sidenav mt-8">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li
                  key={(link as any).href}
                >
                  <Link href={(link as any).href}>{link.children}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <ul className="flex column folders">
        {folders.map((folder) => {
          const href = folderHref(folder);
          const active =
            folder === 'root' ? router.pathname === '/' : router.pathname.startsWith(`/${folder}`);
          return (
            <li key={folder} className={clsx(active ? 'active' : '', 'dark')}>
              <Link href={href}>{folderLabel(folder)}</Link>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        nav {
          position: sticky;
          top: var(--top-nav-height);
          height: calc(100vh - var(--top-nav-height));
          flex: 0 0 auto;
          overflow-y: auto;
          padding: 2.5rem 2rem 2rem;
          padding-top: 4rem;
        }
        span {
          font-size: larger;
          font-weight: 500;
          padding: 0.5rem 0 0.5rem;
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin: 0;
          margin-top: 1em;
        }
        ul.folders li { margin-left: 0.5rem; }
      `}</style>
    </nav>
  );
}
