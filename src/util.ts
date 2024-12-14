/**
 * Deeply merges the source object into the target object.
 *
 * @param target - The target object to merge into.
 * @param source - The source object to merge from.
 * @returns The merged target object.
 */
function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  for (const key in source) {
    if (source[key] instanceof Object) {
      if (!target[key]) Object.assign(target, { [key]: {} });
      deepMerge(target[key] as Record<string, unknown>, source[key] as Record<string, unknown>);
    } else {
      Object.assign(target, { [key]: source[key] });
    }
  }

  return target;
}

export { deepMerge };