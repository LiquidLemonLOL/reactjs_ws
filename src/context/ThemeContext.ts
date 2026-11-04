import { createContext } from "react";
import type {Theme} from "../types.ts";

export type ThemeContextProps = {
    theme: Theme;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);