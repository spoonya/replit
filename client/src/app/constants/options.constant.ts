interface Options {
  readonly themes: {
    readonly storageName: string;
    readonly light: string;
    readonly dark: string;
    readonly darkTheme: string;
    readonly lightTheme: string;
  };
}

export const OPTIONS: Options = {
  themes: {
    storageName: 'codeit-theme',
    light: 'light',
    dark: 'dark',
    darkTheme: 'darkTheme',
    lightTheme: 'lightTheme'
  }
};
