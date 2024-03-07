module.exports = {
    parser: "vue-eslint-parser",
    env: {
        browser: true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential",
        'plugin:vue/base',
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: 'tsconfig.json',
        extraFileExtensions: ['.vue'],
        parser: {
            // Script parser for `<script>`
            js: "espree",

            // Script parser for `<script lang="ts">`
            ts: "@typescript-eslint/parser",
        },
    },
    plugins: [
        "vue",
    ],
    "rules": {
        '@typescript-eslint/strict-boolean-expressions': 'off',
    }
}
