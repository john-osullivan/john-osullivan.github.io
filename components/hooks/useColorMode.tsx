import React, { createContext, useContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

type ColorMode = 'light' | 'dark';

const ColorModeContext = createContext({
    colorMode: 'dark' as ColorMode,
    toggleColorMode: () => { },
});

export function ColorModeProvider({ children }: React.PropsWithChildren) {
    // const { colorMode, toggleColorMode } = useColorMode();
    const [colorMode, setColorMode] = useLocalStorage('colorMode', 'light' as ColorMode);
    function toggleColorMode() {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
    }
    return (
        <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
            {children}
        </ColorModeContext.Provider>
    )
}

export function useColorMode() {
    return useContext(ColorModeContext);
}