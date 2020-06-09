import typescript from "@wessberg/rollup-plugin-ts";
import pkg from './package.json';


// CommonJS (for Node) and ES module (for bundlers) build.
// (We could have three entries in the configuration array
// instead of two, but it's quicker to generate multiple
// builds from a single configuration where possible, using
// an array for the `output` option, where we can specify
// `file` and `format` for each target)

export default [
    {
        input: 'src/index.ts',
        plugins: [typescript({})],
        external: ['lodash.throttle', 'lodash.debounce', 'react'],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ]
    }
]


