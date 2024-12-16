/**
 * A class to manage configuration settings.
 * 
 * @class Config
 * @template {Record<string, unknown>} - The type of the settings object.
 */
class Config {
  private settings: Record<string, unknown>;
  private required: Record<string, string>;
  private checks: Record<string, (value: unknown) => boolean>;

  constructor(initialSettings: Record<string, unknown> = {},
    requiredSettings: Record<string, string> = {},
    checks: Record<string, (value: unknown) => boolean> = {}) {
    this.settings = initialSettings;
    this.required = requiredSettings;
    this.checks = checks;
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
   * Requires a setting to be set.
   * 
   * @param key - The key of the setting to require.
   * @param message - The message to display if the setting is not set.
   */
  require(key: string, message: string): void {
    this.required[key] = message;
  }

  /**
   * Applies a check to a setting.
   * 
   * @param key - The key of the setting to check.
   * @param check - The function to use to check the setting.
   */
  check(key: string, check: (value: unknown) => boolean): void {
    this.checks[key] = check;
  }

  /**
   * Validates the settings.
   *
   * @returns {string[]} An array of error messages.
   */
  validate(): string[] {
    const errors: string[] = [];

    for (const key in this.required) {
      if (!this.has(key)) {
        errors.push(`${this.required[key]}: ${this.required[key]}`);
      }
    }

    for (const key in this.checks) {
      if (!this.checks[key](this.get(key))) {
        errors.push(`The value for ${key} is invalid.`);
      }
    }

    return errors;
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