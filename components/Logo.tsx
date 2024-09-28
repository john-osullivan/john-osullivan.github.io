import React from 'react';
import { useColorMode } from './hooks';

interface LogoProps {
    size?: 'small' | 'large' | 'medium'
}
export function Logo({ size = 'small' }: LogoProps) {
    const { colorMode, toggleColorMode } = useColorMode();
    const logoUrl = colorMode === 'dark' ? 
        '/guide-logo-darkmode.png' : 
        '/guide-logo-lightmode.png';
    const sizePx = (
        size === 'small' ? '27px' : 
        size === 'medium' ? '36px' : '54px'
    )
    return (
        <img src={logoUrl} 
            onClick={toggleColorMode} alt="logo" 
            style={{
                borderRadius: '50%', 
                borderWidth: '8px',
                borderColor: colorMode === 'dark' ? 'white' : 'black'
            }}
            height={sizePx} 
            width={sizePx} />
    )
}