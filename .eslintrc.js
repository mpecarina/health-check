module.exports = {
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "no-undef": "off",
    quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ["warn", "never"],
    "prettier/prettier": "warn",
  },
}
