// src/main2.js
export default function () {
  return import('./main.js').then(({ default: main }) => {
    main();
  });
}
