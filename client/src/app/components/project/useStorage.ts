import { useEffect, useState } from 'react';

export default function useStorage(storageName: string, defaultVal: string) {
  const [value, setValue] = useState(() => {
    const projectJson = localStorage.getItem(storageName);

    if (projectJson !== null) return JSON.parse(projectJson);

    return defaultVal;
  });

  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(value));
  }, [storageName, value]);

  return [value, setValue];
}
