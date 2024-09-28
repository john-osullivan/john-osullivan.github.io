import React from 'react';
import { useColorMode } from './hooks';

export function ColorModeStyles() {
    const { colorMode } = useColorMode();
    return (
        <style jsx global>
            {`

        body {
          background-color: ${colorMode === 'dark' ?
                    'var(--dark-background-color)' :
                    'var(--light-background-color)'};
          color: ${colorMode === 'dark' ?
                    'var(--dark-body-text-color)' :
                    'var(--light-body-text-color)'};
          border-color: ${colorMode === 'dark' ? 'black' : 'white'};
        
        }

        div,p,span {
          color: ${colorMode === 'dark' ?
                    'var(--dark-body-text-color)' :
                    'var(--light-body-text-color)'};
        }

        h1,h2,h3,h4,h5,h6 {
          color: ${colorMode === 'dark' ?
                    'var(--dark-heading-color)' :
                    'var(--light-heading-color)'};
        }

        p.intro,span.intro {
          color: ${colorMode === 'dark' ?
                    'var(--dark-subheader-color)' :
                    'var(--light-subheader-color)'};
        }

        a {
          color: ${colorMode === 'dark' ?
                    'var(--dark-link-color)' :
                    'var(--light-link-color)'};
        }

        a:hover {
          color: ${colorMode === 'dark' ?
                    'var(--dark-link-hover-color)' :
                    'var(--light-link-hover-color)'};
        }
        `}
        </style>
    )
}