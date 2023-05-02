const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // When using SVGr with Next.js, Jest is not able to work correctly with SVGs
        // As React Components and throws an error, this line of code resolves this issue.
        // Notice that is required to create a `file-mock.js` file for this to work.
        '^.+\\.(svg)$': '<rootDir>/src/test/__mocks__/file-mock.js',
    },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
