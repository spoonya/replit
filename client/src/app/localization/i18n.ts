import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { OPTIONS } from '../constants/options.constant';
import { getStorage } from '../helpers/options.helper';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        slogan: {
          code: 'Code',
          create: 'Create',
          collaborate: 'Collaborate'
        },
        descrip: 'Online Realtime Collaborative Editor and Compiler',
        startDialog: {
          start: 'Start coding',
          getStarted: 'Get Started',
          language: 'Language',
          create: 'Create project'
        },
        tooltips: {
          sidebar: {
            compile: 'Compile',
            explorer: 'Explorer',
            share: 'Share',
            settings: 'Settings'
          },
          menu: {
            explorer: {
              newFile: 'New File',
              newFolder: 'New Folder'
            }
          }
        },
        sidebar: {
          share: {
            title: 'Share',
            label: 'Shareable Link',
            btn: 'Copy link'
          }
        },
        explorer: {
          title: 'Explorer'
        },
        settings: {
          title: 'Settings',
          general: {
            title: 'General',
            lightTheme: 'Light theme',
            lang: 'Language'
          },
          editor: {
            title: 'Editor',
            fontSize: {
              title: 'Font size',
              variants: {
                small: 'small',
                normal: 'normal',
                large: 'large',
                huge: 'huge'
              }
            },
            indentSize: {
              title: 'Indent size'
            }
          }
        }
      }
    },
    ru: {
      translations: {
        slogan: {
          code: 'Программируйте ',
          create: 'Создавайте',
          collaborate: 'Объединяйтесь'
        },
        descrip: 'Онлайн-редактор и компилятор для совместной работы в реальном времени',
        startDialog: {
          start: 'Начать работу',
          getStarted: 'Начать',
          language: 'Язык',
          create: 'Создать проект'
        },
        tooltips: {
          sidebar: {
            compile: 'Компилировать',
            explorer: 'Файлы',
            share: 'Поделиться',
            settings: 'Настройки'
          },
          menu: {
            explorer: {
              newFile: 'Создать файл',
              newFolder: 'Создать папку'
            }
          }
        },
        sidebar: {
          share: {
            title: 'Поделиться ссылкой',
            label: 'Ссылка общего доступа',
            btn: 'Копировать'
          }
        },
        explorer: {
          title: 'Файлы'
        },
        settings: {
          title: 'Настройки',
          general: {
            title: 'Общие',
            lightTheme: 'Светлая тема',
            lang: 'Язык'
          },
          editor: {
            title: 'Редактор',
            fontSize: {
              title: 'Размер шрифта',
              variants: {
                small: 'маленький',
                normal: 'нормальный',
                large: 'большой',
                huge: 'огромный'
              }
            },
            indentSize: {
              title: 'Размер отступа'
            }
          }
        }
      }
    }
  },
  lng: getStorage(OPTIONS.settings.language.storageName),
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
    formatSeparator: ','
  },
  returnObjects: true,
  react: {
    wait: true
  }
});

export default i18n;
