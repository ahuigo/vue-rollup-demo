"use strict";

import Vue from "vue";
import Appp from "./App.vue";

import debug from 'debug';
const log = debug('app:log');


@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true

/**
 * debug
 */
if (ENV !== "production") { 
    debug.enable("*"); 
    log("Logging is enabled!!");  
    let s = document.createElement('script')
    s.src = "http://" + (location.host || "localhost").split(":")[0] + ":35729/livereload.js?snipver=1" ; 
    document.head.appendChild(s)
} else { debug.disable(); }


/**
 * VUE
 */
new Vue({
    el: "#app",
    template: "<Appp/>",
    components: { Appp },
    //render: h => h(App)
});
