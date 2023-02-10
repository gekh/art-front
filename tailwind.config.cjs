/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,pug}'],
  theme: {
    colors: {
      'black': '#000',
      'white': '#fff',
      'cloudy': '#f3f3f3',
      'silvery': '#999',
      'graphite': '#494949',
      'biruza': '#08ade9',
      'sky': '#3898EC',
      'pinky': '#0992b2',
      'transparent': 'transparent',
    },
    extend: {},
  },
  plugins: [
    function groupPeer({ addVariant }) {
      let pseudoVariants = [
        // ... Any other pseudo variants you want to support.
        // See https://github.com/tailwindlabs/tailwindcss/blob/6729524185b48c9e25af62fc2372911d66e7d1f0/src/corePlugins.js#L78
        "checked",
      ].map((variant) =>
        Array.isArray(variant) ? variant : [variant, `&:${variant}`],
      );

      for (let [variantName, state] of pseudoVariants) {
        addVariant(`group-peer-${variantName}`, (ctx) => {
          let result = typeof state === "function" ? state(ctx) : state;
          return result.replace(/&(\S+)/, ":merge(.peer)$1 ~ .group &");
        });
      }
    },
  ],
}
