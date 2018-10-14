require = require("esm")(module)

module.exports = {
    setupTestFrameworkScriptFile: './setupTests.js',
    cache: false,
    testMatch: ['**/?(*.)test.js?(x)'],
    testPathIgnorePatterns: [],
    transform: {
      '^.+\\.(js||jsx)?$': 'babel-jest'
    },
    transformIgnorePatterns: ["node_modules/","node_modules/(?!(lodash-es)/)"]
  };
  