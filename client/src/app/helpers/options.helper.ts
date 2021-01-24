export const getStorage = (storageName: string): string => {
  return window.localStorage.getItem(storageName);
};

export const setStorage = (storageName: string, value: string) => {
  return window.localStorage.setItem(storageName, value);
};
