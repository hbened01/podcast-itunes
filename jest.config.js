const jestConfig = {
  moduleNameMapper: {
    // see: https://github.com/kulshekhar/ts-jest/issues/414#issuecomment-517944368
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass|jpg)$": "identity-obj-proxy"
  },
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleFileExtensions: ["json", "js", "jsx", "ts", "tsx", "cjs"],
  moduleDirectories: ["node_modules"],
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
};

export default jestConfig;