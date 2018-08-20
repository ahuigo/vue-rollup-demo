import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import VuePlugin from "rollup-plugin-vue";

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
    plugins:[json(), resolve(), VuePlugin() ],
    //plugins:[VuePlugin() ],
};
