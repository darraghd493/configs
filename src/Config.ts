/**
 * A class to manage configuration settings.
 * 
 * @class Config
 * @template {Record<string, unknown>} - The type of the settings object.
 */
class Config {
  private settings: Record<string, unknown>;

  constructor(initialSettings: Record<string, unknown> = {}) {
    this.settings = initialSettings;
  }

  /**
   * Retrieves the value associated with the specified key from the settings.
   *
   * @param {string} key - The key whose associated value is to be returned.
   * @returns {unknown} The value associated with the specified key, or `undefined` if the key does not exist.
   */
  get(key: string): unknown {
    return this.settings[key] || undefined;
  }

  /**
   * Sets a configuration value for the specified key.
   *
   * @param key - The key for the configuration setting.
   * @param value - The value to set for the specified key.
   * @returns void
   */
  set(key: string, value: unknown): void {
    this.settings[key] = value;
  }

  /**
   * Checks if the specified key exists in the settings.
   *
   * @param key - The key to check for existence in the settings.
   * @returns `true` if the key exists, otherwise `false`.
   */
  has(key: string): boolean {
    return this.settings[key] !== undefined;
  }

  /**
   * Removes a configuration setting by its key.
   *
   * @param key - The key of the setting to remove.
   */
  remove(key: string): void {
    this.settings[key] = undefined;
  }

  /**
   * Returns the settings object.
   *
   * @returns {Record<string, unknown>} The settings object.
   */
  object(): Record<string, unknown> {
    return this.settings;
  }
}

export default Config;