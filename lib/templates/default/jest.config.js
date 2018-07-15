module.exports = {
  transform: {
    '^.+\\.ts': 'ts-jest',
  },
  testRegex: '\\.spec\\.ts',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.ts',
  ],
  coverageDirectory: './coverage',
  moduleDirectories: ['node_modules', 'src'],
}
