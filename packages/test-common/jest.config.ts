
const config = {
  verbose: false,
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.test.ts'],
  roots: ['src'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverage: false,
  passWithNoTests: true,
};

export default config;

