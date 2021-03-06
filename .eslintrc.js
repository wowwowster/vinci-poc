module.exports = {
  extends: ['algolia/react',
    'eslint:recommended',
    'plugin:react/recommended'
    , "prettier", "prettier/react"
  ],
  settings: {
    "react": {
      "version": "16.4.2"
    },
  },
  "plugins": ["prettier"],
  rules: {
    "linebreak-style": ["error", "windows"],
    "react/prop-types": [
      "enabled",
      {"ignore": "ignore", "customValidators": "customValidator"}
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error"
  },
  "globals": {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true
  }
}
