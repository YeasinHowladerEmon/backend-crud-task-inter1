const pick = <T extends object, k extends keyof T>(obj: T, keys: k[]) => {
  const finalObj: Partial<T> = {};
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};
export default pick;
