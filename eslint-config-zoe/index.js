module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  extends: [
    "airbnb",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier"
  ],
  plugins: ["no-use-extend-native", "promise", "unicorn", "jest", "prettier"],
  rules: {
    "no-use-extend-native/no-use-extend-native": "error",
    "no-console": "off",
    "no-plusplus": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    strict: "off",
    "lines-between-class-members": "off",
    "unicorn/filename-case": "off",
    "react/destructuring-assignment": "off"
  }
};
