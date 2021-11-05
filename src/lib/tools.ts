export const add = (a: number, b: number) => {
  if (!Number.isFinite(+a) || !Number.isFinite(+b))
    throw Error('arguments (a,b) must be a numbers');
  return +a + +b;
};
