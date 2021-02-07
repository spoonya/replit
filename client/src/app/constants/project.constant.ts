interface Project {
  readonly title: {
    defaultVal: string;
    value: string;
    storage: string;
  };
  readonly html: {
    value: string;
    storage: string;
  };
  readonly css: {
    value: string;
    storageName: string;
  };
  readonly js: {
    value: string;
    storage: string;
  };
}

export const PROJECT: Project = {
  title: {
    defaultVal: 'Untitled',
    value: '',
    storage: 'codeit-title'
  },
  html: {
    value: '',
    storage: 'codeit-html'
  },
  css: {
    value: '',
    storageName: 'codeit-css'
  },
  js: {
    value: '',
    storage: 'codeit-js'
  }
};
