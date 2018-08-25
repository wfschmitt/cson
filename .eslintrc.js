module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true,

    },
    'settings': {
        'import/resolver': {
            'jest': {
                'jestConfigFile': './test/jest.config.js'
            }
        }
    },
    'plugins': ['jest'],
    'extends': ['plugin:jest/recommended'],
    'parserOptions': {

        'ecmaVersion': 8,
        'sourceType': 'module'
    },
    'rules': {
	"async/missing-await-in-async-fn": 1,
	"async-await/space-after-async": 2,
    "async-await/space-after-await": 2,
    'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
