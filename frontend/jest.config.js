// jest.config.js
module.exports = {
    preset: 'jest-preset-angular',
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest',
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  