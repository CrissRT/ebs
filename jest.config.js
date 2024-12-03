"use strict";
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^components/(.*)$': '<rootDir>/src/components/$1',
        '^context/(.*)$': '<rootDir>/src/context/$1',
        '^assets/(.*)$': '<rootDir>/src/assets/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
