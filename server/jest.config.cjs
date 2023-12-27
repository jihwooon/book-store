module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: [
    'js',
    'json',
  ],
  setupFiles: [
    'jest-plugin-context/setup',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  rootDir: '.',
  transform: {
    '^.+\\.js?$': [
      '@swc/jest',
    ],
  },
  collectCoverageFrom: [
    '**/*.js',
  ],
  roots: [
    '<rootDir>/',
  ],
  coverageDirectory: '../coverage',
};
