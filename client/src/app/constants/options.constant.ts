interface Options {
  readonly themes: {
    readonly storageName: string;
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
      readonly storageName: string;
    };
    readonly fontSize: {
      readonly defaultValue: number;
      readonly values: {
        readonly small: number;
        readonly normal: number;
        readonly large: number;
        readonly huge: number;
      };
      readonly storageName: string;
    };
    readonly language: {
      readonly defaultValue: string;
      readonly values: {
        readonly ru: string;
        readonly en: string;
        readonly uk: string;
      };
      readonly storageName: string;
    };
    readonly backend: {
      host: string;
    };
  };
}

export const OPTIONS: Options = {
  themes: {
    storageName: 'codeit-theme',
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
      storageName: 'codeit-indentSize'
    },
    fontSize: {
      defaultValue: 14,
      values: {
        small: 10,
        normal: 14,
        large: 18,
        huge: 24
      },
      storageName: 'codeit-fontSize'
    },
    language: {
      defaultValue: 'en-EN',
      values: {
        ru: 'ru-RU',
        en: 'en-EN',
        uk: 'uk-UA'
      },
      storageName: 'codeit-localization'
    },
    backend: {
      host: 'http://localhost:8081'
    }
  }
};
