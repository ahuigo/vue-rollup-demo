# vue-rollup
这是一个vue+rollup 的demo

# build
see: js-rollup.md

    rollup -c -w 

# issue
https://github.com/vuejs/rollup-plugin-vue/issues/231

1. VuePlugin() 要放在babel 之前先处理
2. babel 不要包括node_modules: `babel({ exclude: 'node_modules/**', include: '**/*.js' })`
