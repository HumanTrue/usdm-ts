import js from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import { defineConfig } from "eslint/config"
import { importX } from "eslint-plugin-import-x"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import globals from "globals"
import tseslint from "typescript-eslint"

/** @type {import('eslint').FlatConfig.ConfigArray} */
export default defineConfig(
  js.configs.recommended,

  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,

  // typescript linting and type checking filtered to typed files
  tseslint.configs.recommended,
  ...tseslint.configs.strictTypeCheckedOnly.map(config => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"]
  })),

  stylistic.configs.recommended,

  {
    ignores: [
      "next-env.d.ts",
      "pre-dev.js",
      "postcss.config.cjs",
      "node_modules/**",
      "dist/**",
      ".turbo/**",
      ".next/**",
      "node_modules/**",
      "**/*.generated.ts",
      "scripts/**"
    ]
  },

  {
    files: ["**/*"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.mjs", "*.js", "*.ts", "scripts/*.ts", "src/*.js"]
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.node
      }
    },
    plugins: {
      "unused-imports": unusedImportsPlugin
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "quotes": "off", // needed to avoid conflicts with other quote settings
      "no-trailing-spaces": "error",

      // lint stuff
      "@typescript-eslint/no-deprecated": "off",

      // style overrides
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/eol-last": "off",
      "@stylistic/jsx-one-expression-per-line": "off" // @dugan thoughts?
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // TODO fix violations and enable
      "@typescript-eslint/no-unnecessary-condition": "off",

      "@typescript-eslint/no-non-null-assertion": "off",
      "@stylistic/space-before-function-paren": "off",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/return-await": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": ["error", "never"],
      "@stylistic/member-delimiter-style": ["error", {
        multiline: {
          delimiter: "none"
        }
      }],
      "@typescript-eslint/no-explicit-any": "off",

      // some type-safe checks that are a bit too heavy handed
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",

      // import-x rules
      "import-x/first": "error",
      "import-x/no-duplicates": "error",
      "import-x/no-absolute-path": "error",
      "import-x/no-named-as-default": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-named-as-default-member": "off",
      "import-x/order": ["error", {
        named: true,
        alphabetize: {
          order: "asc"
        }
      }],

      // other
      "@typescript-eslint/restrict-plus-operands": ["error", { allowBoolean: true, allowNullish: true, allowNumberAndString: true }],
      "@typescript-eslint/no-unnecessary-type-parameters": ["off"],

      // logging
      "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true, allowBoolean: true }],

      // ok to have unused vars
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // dont need this for ts
      "no-undef": "off"
    }
  },

  // Test files configuration
  {
    files: ["**/*.test.ts"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off"
    }
  },

  // js and mjs config
  {
    files: ["**/*.js", "**/*.mjs"],
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": ["error", "never"],
      "import-x/no-named-as-default-member": "off",
      "unused-imports/no-unused-imports": "error"
    }
  }
)