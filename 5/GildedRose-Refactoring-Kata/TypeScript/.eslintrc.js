module.exports = {
  env: {
    mocha: true
  },
  parserOptions: {
    project: './tsconfig-tools.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
      typescript: {
        // Needed to enable `import/no-unresolved` for tsconfig "paths" support
        project: __dirname + '/tsconfig-tools.json'
      },
    },
  },
  extends: [
    '@lafourchette/eslint-config-thefork',
    '@lafourchette/eslint-config-thefork/node',
    '@lafourchette/eslint-config-thefork/typescript',
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      rules: {
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off"
      }
    }
  ]
};
