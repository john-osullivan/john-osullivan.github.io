import React from 'react';

export function Intro({children}:React.PropsWithChildren) {
    return (
        <div className='intro-text'>
            {children}
            <style jsx>
                {`
                .intro-text :global(p) {
                    font-size: 1.125em;
                    font-weight: 600;
                    margin-top: -1.618em;
                    margin-bottom: 1.618em;
                }

                @media (min-width: 640px) {
                    .intro-text :global(p) {
                        max-width: 100%;
                    }
                }
                `}
            </style>
        </div>
    )
}