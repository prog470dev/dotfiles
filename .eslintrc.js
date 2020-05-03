// javascript for react(react-redux)
// npm: eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-redux babel-eslint
module.exports = {
    env: {
        es6: true,
        browser: true, // e.g. console, document, ...
    },
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module", // import statement
    },
    plugins: ["react-redux"],
    extends: [
        "eslint:recommended",
        "plugin:react-redux/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                semi: true,
            },
        ],
    },
};

// typescript for react(react-redux)
// npm: eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-redux
// npm: @typescript-eslint/parser @typescript-eslint/eslint-plugin
module.exports = {
    env: {
        es6: true,
        browser: true, // e.g. console, document, ...
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module", // import statement,
    },
    plugins: [
        "react-redux",
        "@typescript-eslint",
    ],
    extends: [
        "eslint:recommended",
        "plugin:react-redux/recommended",
        "plugin:@typescript-eslint/recommended", 
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint", 
    ],
    rules: {
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                semi: true,
            },
        ],
    },
};
