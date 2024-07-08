export const getNumberParam = (url: string): string => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }