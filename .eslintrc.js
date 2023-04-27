module.exports = {
    extends: ['next/core-web-vitals', 'airbnb', 'airbnb-typescript', 'prettier'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'react/prop-types': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        // When declaring props, if a optional prop is declared, will throw an error because defaultProps are not being declared
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        // When a dependency is added, code editor could say `dependency-name should be listed in the projects dependencies` to avoid this, use this rule
        'import/no-extraneous-dependencies': 'off',
        // Rule required for absolute imports, when importing, would throw an error that the file extension was not provided
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                '': 'never',
                js: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
    },
};
