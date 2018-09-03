import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import VuePlugin from "rollup-plugin-vue";

import replace from 'rollup-plugin-replace';

import uglify from 'rollup-plugin-uglify';
//import postcss from 'rollup-plugin-postcss';

export default{
    //input: "src/main.js",
    input: ["src/index.js"],
	output: {
        format: "esm",
        name: "myBundle",
        dir: "dist",
        //file: "dist/bundle.js",
        paths: {
            d3: "https://d3js.org/d3.v4.min",
            vue: "https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.esm.browser.js",
        }

	},
    experimentalCodeSplitting: true,
    external: ["lodash", "d3","vue"],
    watch: {
        //exclude: ['node_modules/**', 'dist/**',], //default  ignore
        include: ['src/**','src/App.vue'],
    },
    plugins:[
        babel({ exclude: 'node_modules/**' }),
        json(), 
        //resolve({ jsnext: true, main: true, browser: true, }), 
        resolve({ browser: true, }), 
        commonjs(),
        VuePlugin(),
        replace({
          exclude: 'node_modules/**',
          ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        (process.env.NODE_ENV === 'production' && uglify()),
    ],
};
