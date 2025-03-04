"use client"
import { createContext, ReactNode, useContext, useState } from "react";

const ThemeContext = createContext(true);
const ThemeUpdateContext = createContext((): void => { });

export function useTheme() {
    return useContext(ThemeContext);
}

export function useToggleTheme() {
    return useContext(ThemeUpdateContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {

    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>

    )
}