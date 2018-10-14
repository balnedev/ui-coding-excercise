module.exports = {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-transform-runtime",
      ["babel-plugin-root-import", {
        "rootPathSuffix": "."
      }], 
      "dynamic-import-node",
      "lodash",
      "syntax-dynamic-import"
    ],
    "env": {
      "test": {
        "plugins": ["dynamic-import-node",
          "syntax-dynamic-import","transform-es2015-modules-commonjs"]
      }
    }
};