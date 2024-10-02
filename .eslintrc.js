module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-native/all",
    "prettier", // Para desativar regras conflitantes entre ESLint e Prettier
    "plugin:prettier/recommended", // Ativa a integração do Prettier
  ],
  parser: "@typescript-eslint/parser", // Definir o parser do TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-native", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Aplica as regras do prettier
    "prettier/prettier": "error", // Exibe erros do Prettier no ESLint
    "@typescript-eslint/explicit-module-boundary-types": "off", // Exemplo de ajuste para TypeScript
    "react/react-in-jsx-scope": "off", // Desnecessário no React 17+
    "react-native/no-inline-styles": "off",
    "react-native/no-color-literals": "off", // Permitir literais de cor
    "react-native/sort-styles": "error", // Forçar a classificação de propriedades de estilo
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
