// // jest.config.js
// module.exports = {
//     preset: 'jest-preset-angular',
//     transform: {
//       '^.+\\.(ts|js|html)$': 'ts-jest',
//       '^.+\\.jsx?$': 'babel-jest',
//     },
//     moduleNameMapper: {
//       '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//     },
//   };
  

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  // Add any other configurations as needed
};
