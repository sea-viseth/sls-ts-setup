const config = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90
    }
  },
  projects: [
    {
      displayName: 'Unit Tests',
      testMatch: [
        '**/__tests__/**/*.+(ts|js)',
        '**/?(*.)+(spec|test).+(ts|js)',
        '!**/__tests__/mocks/**',
        '!**/__tests__/events/**'
      ],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
      }
    }
  ]
};

module.exports = config;
