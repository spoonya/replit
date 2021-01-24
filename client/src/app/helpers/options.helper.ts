import { OPTIONS } from '~/app/constants/options.constant';

export const getThemeStorage = (): string => {
  return window.localStorage.getItem(OPTIONS.themes.storageName);
};

export const setThemeStorage = (theme: string) => {
  return window.localStorage.setItem(OPTIONS.themes.storageName, theme);
};
