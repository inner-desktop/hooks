import ts from "@wessberg/rollup-plugin-ts";

export default {
    input: 'src/index.ts',
    output: [
        {
            file: `dist/hooks.common.js`,
            format: 'esm',
        },
        {
            file: `dist/hooks.esm.js`,
            format: 'esm',
        }
    ],
    plugins: [
        ts(),
    ],
};