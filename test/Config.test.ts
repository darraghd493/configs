import Config from '../src/Config';

describe('Config', () => {
    let config: Config;

    beforeEach(() => {
        config = new Config();
    });

    test('should set and get a value', () => {
        config.set('key1', 'value1');
        expect(config.get('key1')).toBe('value1');
    });

    test('should return undefined for a non-existent key', () => {
        expect(config.get('nonExistentKey')).toBeUndefined();
    });

    test('should check if a key exists', () => {
        config.set('key2', 'value2');
        expect(config.has('key2')).toBe(true);
        expect(config.has('nonExistentKey')).toBe(false);
    });

    test('should remove a key', () => {
        config.set('key3', 'value3');
        config.remove('key3');
        expect(config.get('key3')).toBeUndefined();
        expect(config.has('key3')).toBe(false);
    });

    test('should initialize with initial settings', () => {
        const initialSettings = { key4: 'value4' };
        config = new Config(initialSettings);
        expect(config.get('key4')).toBe('value4');
    });
});