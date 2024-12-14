/**
 * A class to manage configuration settings.
 * 
 * @class Config
 * @template { [key: string]: any } - The type of the settings object.
 */
class Config {
  private settings: { [key: string]: any };

  constructor(initialSettings: { [key: string]: any } = {}) {
    this.settings = initialSettings;
  }

  /**
   * Retrieves the value associated with the specified key from the settings.
   *
   * @param {string} key - The key whose associated value is to be returned.
   * @returns {any} The value associated with the specified key, or `undefined` if the key does not exist.
   */
  get(key: string): any {
    return this.settings.hasOwnProperty(key) ? this.settings[key] : undefined;
  }

  /**
   * Sets a configuration value for the specified key.
   *
   * @param key - The key for the configuration setting.
   * @param value - The value to set for the specified key.
   * @returns void
   */
  set(key: string, value: any): void {
    this.settings[key] = value;
  }

  /**
   * Checks if the specified key exists in the settings.
   *
   * @param key - The key to check for existence in the settings.
   * @returns `true` if the key exists, otherwise `false`.
   */
  has(key: string): boolean {
    return this.settings.hasOwnProperty(key);
  }

  /**
   * Removes a configuration setting by its key.
   *
   * @param key - The key of the setting to remove.
   */
  remove(key: string): void {
    delete this.settings[key];
  }

  /**
   * Returns the settings object.
   *
   * @returns {Object} An object containing the settings.
   */
  object(): { [key: string]: any } {
    return this.settings;
  }
}

export default Config;