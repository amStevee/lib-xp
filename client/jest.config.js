module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
      '^.+\\.js$': 'babel-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
  };
  