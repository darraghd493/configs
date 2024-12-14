import fs from "fs";

import { create, save, load } from "../src/index";
import Config from "../src/Config";

jest.mock("fs");

describe("Config Module", () => {
    let config: Config;

    beforeEach(() => {
        config = create();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("create should return a new instance of Config", () => {
        const newConfig = create();
        expect(newConfig).toBeInstanceOf(Config);
    });

    test("save should write the config to the specified file path", () => {
        const path = "config.json";
        save(path, config);
        expect(fs.writeFileSync).toHaveBeenCalledWith(path, JSON.stringify(config.object(), null, 2));
    });

    test("load should read the config from the specified file path and merge it into the existing config", () => {
        const path = "config.json";
        const data = { key: "value" };
        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(data));

        load(path, config); // What is the error?

        expect(fs.existsSync).toHaveBeenCalledWith(path);
        expect(fs.readFileSync).toHaveBeenCalledWith(path, "utf8");
        console.log(config);
        expect(config.get("key")).toBe("value");
    });

    test("load should throw an error if the file does not exist", () => {
        const path = "nonexistent.json";
        (fs.existsSync as jest.Mock).mockReturnValue(false);

        expect(() => load(path)).toThrow();
    });

    test("load should throw an error if the file content is not valid JSON", () => {
        const path = "invalid.json";
        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (fs.readFileSync as jest.Mock).mockReturnValue("invalid json");

        expect(() => load(path)).toThrow();
    });
});