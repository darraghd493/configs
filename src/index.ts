import fs from 'fs';

import Config from './Config';
import { deepMerge } from './util';

const _config = new Config();

/**
 * Creates a new instance of the Config class.
 * 
 * @returns A new instance of the Config class.
 */
const create = (): void => {
  return new Config();
}

/**
 * Saves the configuration object to a specified file path.
 *
 * @param path - The file path where the configuration should be saved.
 */
const save = (path: string, config: Config = _config): void => {
  fs.writeFileSync(path, JSON.stringify(config.object(), null, 2));
};

/**
 * Loads configuration data from a specified file path and merges it into the existing config object.
 *
 * @param path - The file path to load the configuration data from.
 * @throws Will throw an error if the file does not exist or if the file content is not valid JSON.
 */
const load = (path: string, config: Config = _config): void => {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
    deepMerge(config.object(), JSON.parse(data));
  } else {
    throw new Error(`File not found: ${path}`);
  }
}

export default (): Config => {
  return _config;
};

export { create, save, load };
