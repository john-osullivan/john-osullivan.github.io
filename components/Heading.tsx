import * as React from 'react';

export function Heading({id = '', level = 1, children, className}:React.PropsWithChildren<{
  id?: string;
  level?: number;
  className?: string;
  }>) {
  return React.createElement(
    `h${level}`,
    {
      id,
      className: ['heading', className].filter(Boolean).join(' '),
    },
    children
  );
}
