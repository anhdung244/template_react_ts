/* eslint-disable import/no-unresolved */
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import checkFile from "eslint-plugin-check-file"
import _import from "eslint-plugin-import"
import preferArrow from "eslint-plugin-prefer-arrow"
import prettier from "eslint-plugin-prettier"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import tailwindcss from "eslint-plugin-tailwindcss"
import unusedImports from "eslint-plugin-unused-imports"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...fixupConfigRules(
    compat.extends(
      "plugin:@tanstack/eslint-plugin-query/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:unicorn/recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
      "plugin:tailwindcss/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "prettier",
    ),
  ),
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["vite.config.ts, eslint.config.mjs", "*.js"],
    plugins: {
      "react-hooks": fixupPluginRules(reactHooks),
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      "simple-import-sort": simpleImportSort,
      import: fixupPluginRules(_import),
      "unused-imports": unusedImports,
      prettier,
      tailwindcss: fixupPluginRules(tailwindcss),
      "prefer-arrow": preferArrow,
      "check-file": checkFile,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        project: "./tsconfig.json",
        projectService: true,
        tsconfigRootDir: `${__dirname}`,
        ecmaFeatures: {
          modules: true,
        },
      },
    },

    settings: {
      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".d.ts", ".tsx"],
        },
        typescript: {
          project: "./tsconfig.json",
        },
        alias: {
          map: [["@", path.resolve(__dirname, "./src")]],
          extensions: [".js", ".jsx", ".ts", ".d.ts", ".tsx"],
        },
      },

      react: {
        version: "detect",
      },

      tailwindcss: {
        config: `${__dirname}/tailwind.config.js`,
      }

    },

    rules: {
      "react-refresh/only-export-components": ["warn"],
      "@typescript-eslint/no-explicit-any": "error",
      "unused-imports/no-unused-imports": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            param: true,
            Param: true,
            req: true,
            res: true,
            Props: true,
            props: true,
            prop: true,
            Prop: true,
            params: true,
            Params: true,
            ref: true,
            Ref: true,
            prev: true,
            Prev: true,
            i: true,
            e: true,
            env: true,
          },
        },
      ],

      "unicorn/no-null": "off",
      "unicorn/prefer-module": "off",
      "unicorn/no-array-reduce": "off",

      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: ["is", "should", "has", "can", "did", "will"],
        },
        {
          selector: "typeAlias",
          format: ["PascalCase"],
          prefix: ["T"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          prefix: ["I"],
        },
        {
          selector: "enum",
          format: ["PascalCase"],
          prefix: ["E"],
        },
      ],

      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**/": "KEBAB_CASE",
        },
      ],

      "linebreak-style": ["error", "unix"],
      "tailwindcss/no-custom-classname": ["off"],

      "prefer-arrow/prefer-arrow-functions": [
        "error",
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],

      "prefer-arrow-callback": [
        "error",
        {
          allowNamedFunctions: false,
        },
      ],

      "func-style": [
        "error",
        "expression",
        {
          allowArrowFunctions: true,
        },
      ],
    },
  },
  {
    languageOptions: {
      parser: tsParser,
    },
  },
]
