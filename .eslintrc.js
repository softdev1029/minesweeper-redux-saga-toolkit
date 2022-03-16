module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "max-len": [
      "error",
      {
        code: 200,
      },
    ],
    quotes: ["error"],
    "require-jsdoc": "off",
    "no-unused-vars": "off",
  },
};
