import svelte from 'rollup-plugin-svelte'

export default {
    input: 'main.js',
    output: {
      file: 'public/build/bundle.js',
      format: 'iife'
    },
    plugins: [
        svelte(),
    ],
  };