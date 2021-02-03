interface Options {
  readonly themes: {
    readonly storage: string;
    readonly light: string;
    readonly dark: string;
    readonly darkTheme: string;
    readonly lightTheme: string;
  };
  readonly settings: {
    readonly indentSize: {
      readonly defaultValue: number;
      readonly values: {
        readonly twoSpaces: number;
        readonly fourSpaces: number;
      };
      readonly storage: string;
    };
    readonly fontSize: {
      readonly defaultValue: number;
      readonly values: {
        readonly small: number;
        readonly normal: number;
        readonly large: number;
        readonly huge: number;
      };
      readonly storage: string;
    };
    readonly language: {
      readonly defaultValue: string;
      readonly values: {
        readonly ru: string;
        readonly en: string;
        readonly uk: string;
      };
      readonly storage: string;
    };
    readonly backend: {
      host: string;
    };
  };
}

export const OPTIONS: Options = {
  themes: {
    storage: 'codeit-theme',
    light: 'light',
    dark: 'dark',
    darkTheme: 'darkTheme',
    lightTheme: 'lightTheme'
  },
  settings: {
    indentSize: {
      defaultValue: 2,
      values: {
        twoSpaces: 2,
        fourSpaces: 4
      },
      storage: 'codeit-indentSize'
    },
    fontSize: {
      defaultValue: 14,
      values: {
        small: 10,
        normal: 14,
        large: 18,
        huge: 24
      },
      storage: 'codeit-fontSize'
    },
    language: {
      defaultValue: 'en-EN',
      values: {
        ru: 'ru-RU',
        en: 'en-EN',
        uk: 'uk-UA'
      },
      storage: 'codeit-localization'
    },
    backend: {
      host: 'http://localhost:8081'
    }
  }
};
