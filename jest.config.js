/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  roots: ["<rootDir>/src/", "<rootDir>/test/"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules"],
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};