import { Classes } from "@blueprintjs/core";

export const DARK_THEME = Classes.DARK;
export const LIGHT_THEME = "";
const THEME_LOCAL_STORAGE_KEY = "mramos-dev-theme";

export const isDarkTheme = (theme: string) => theme === DARK_THEME;

/** Return the current theme className. */
export const getTheme = (): string => {
    return localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || LIGHT_THEME;
}

/** Persist the current theme className in local storage */
export const setTheme = (useDark: boolean) => {
    const nextThemeName = useDark ? DARK_THEME : LIGHT_THEME;
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, nextThemeName);
    return nextThemeName;
}