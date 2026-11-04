import {type ReactNode, useState, useEffect} from 'react';
import {ThemeContext} from './ThemeContext';
import {type Theme } from "../types";

const THEME_KEY = "theme";

function getInitTheme(): Theme {

    try {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    } catch {
        // cant find localstorage, ignore
    }
    // default follows os
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({children}: { children: ReactNode }){

    const [theme, setTheme] = useState<Theme>(getInitTheme());

    useEffect(() => {
            document.documentElement.classList.toggle("dark", theme === "dark");
            try {
                localStorage.setItem(THEME_KEY, theme);
            } catch {
                //ignore
            }
        }, [theme])

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}