import DB from './index';

export function querySingle<T>(query: string): Promise<T | null> {
  return DB(query).then((result: T[]) => {
    const res = result[0];
    if (!res) {
      return null;
    }
    return { ...res };
  });
}

export function queryMulti<T>(query: string): Promise<T[] | null> {
  return DB(query).then((result: T[]) => {
    return (result || []).map((val) => ({ ...val }));
  });
}
