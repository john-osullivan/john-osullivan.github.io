import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {useColorMode} from './hooks';

const items = [
  {
    title: '~ $',
    links: [
      {href: '/', children: <code>./index</code>},
      {href: '/whoami', children: <code>./whoami</code>}
    ],
  },
];

export function SideNav() {
  const router = useRouter();
  const {colorMode} = useColorMode()
  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link} />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
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
          }
        `}
      </style>
    </nav>
  );
}
