module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "no-param-reassign": 0,
    "no-nested-ternary": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-props-no-spreading": 0
  }
};
