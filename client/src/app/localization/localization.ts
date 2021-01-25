import LocalizedStrings from 'react-localization';

const localization = new LocalizedStrings({
  en: {
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
  },
  ru: {
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
});

export default localization;
