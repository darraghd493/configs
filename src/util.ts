/**
 * Deeply merges the source object into the target object.
 *
 * @param target - The target object to merge into.
 * @param source - The source object to merge from.
 * @returns The merged target object.
 */
function deepMerge(target: any, source: any) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object') {
      if (!target[key]) {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

export { deepMerge };