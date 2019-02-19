// theme.ts
export interface ThemeInterface {
    colors: {
        white: string,
        black: string,
        grayLight: string,
        grayMedium: string,
        grayDark: string,
        primary: string,
        secondary: string,
        warning: string,
        danger: string,
        info: string,
        success: string
    },
    fontSize: {
        xs: string,
        sm: string,
        md: string,
        lg: string,
        bg: string,
        hg: string,
        gt: string
    },
    spacing: {
        none: string,
        xs: string,
        sm: string,
        md: string,
        lg: string,
        bg: string,
        hg: string,
        gt: string,
        full: string
    },
    doubleSpacing: {
        none: string,
        xs: string,
        sm: string,
        md: string,
        lg: string,
        bg: string,
        hg: string,
        gt: string
    },
    rounded: {
        sm: string,
        md: string,
        lg: string,
        hg: string,
        full: string
    }
}

export type Colors = 'white' | 'black' | 'grayLight' | 'grayMedium' | 'grayDark' | 'primary' | 'secondary' | 'warning' | 'danger' | 'info' | 'success';
export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'bg' | 'hg' | 'gt';
export type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'bg' | 'hg' | 'gt' | 'full';
export type DoubleSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'bg' | 'hg' | 'gt';
export type Rounded = 'sm' | 'md' | 'lg' | 'hg' | 'full';

