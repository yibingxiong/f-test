import React from 'react';

export interface IThemeContext {
    foreground: string;
    background: string;
    toggleTheme?: () => void;
}


export interface IThemes {
    light: IThemeContext;
    dark: IThemeContext;
}

export const themes:IThemes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};



const ThemeContext: React.Context<IThemeContext> = React.createContext(themes.light);

ThemeContext.displayName = "TestAdvancedGuidesContext"


export { ThemeContext }

