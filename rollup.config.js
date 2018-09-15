import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import VuePlugin from "rollup-plugin-vue";
import es2015 from "babel-preset-es2015-rollup-vue";
import typescript from 'rollup-plugin-typescript';

import replace from 'rollup-plugin-replace';

import uglify from 'rollup-plugin-uglify';
//import postcss from 'rollup-plugin-postcss';

export default{
    //input: "src/main.js",
    input: ["src/index.ts"],
    output: {
        format: "esm",
        name: "myBundle",
        dir: "dist",
        //file: "dist/bundle.js",
        paths: {
            vue: "https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.esm.browser.js",
        }
    },
    experimentalCodeSplitting: true,
    external: ["lodash", "vue"],
    watch: {
        //exclude: ['node_modules/**', 'dist/**',], //default  ignore
        include: ['src/**','src/App.vue'],
    },
    plugins:[
        json(),
        //resolve({ jsnext: true, main: true, browser: true, }),
        typescript({
            tsconfig: false,
            experimentalDecorators: true,
            module: 'es2015'
        }),
        //babel({ exclude: 'node_modules/**' }),
        resolve({ browser: true, }),
        commonjs(),

        VuePlugin({
            defaultLang: { script: 'ts' },
        }),
        //babel({ exclude: 'node_modules/**', }),
        //plugins: [ ['es2015', {modules: false}] ]
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        (process.env.NODE_ENV === 'production' && uglify()),
    ],
};
