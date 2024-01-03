/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  setupFiles: [
    'jest-plugin-context/setup',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    'dist',
  ],
  rootDir: '.',
  transform: {
    '^.+\\.(t|j)s?$': [
      '@swc/jest',
    ],
  },
  collectCoverageFrom: [
    '**/*.(t|j)s',
  ],
  roots: [
    '<rootDir>/',
  ],
  coverageDirectory: '../coverage',
};
