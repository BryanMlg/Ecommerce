export default {
    "env": {
        "browser": true,
        "es2021": true,
        "amd": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "next/core-web-vitals",
        "next",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error", "always"]
    },
    
}
