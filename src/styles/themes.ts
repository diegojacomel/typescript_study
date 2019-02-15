// theme.ts
export interface ThemeInterface {
    colors: {
        primary: string,
        secondary: string,
        warning: string,
        danger: string,
        info: string,
        success: string
    }
}

export type Colors = 'primary' | 'secondary' | 'warning' | 'danger' | 'info' | 'success';
