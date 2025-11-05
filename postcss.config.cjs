const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecss({
            content: ['./index.html', './src/**/*.{ts,tsx}'],
            defaultExtractor: (content) =>
              content.match(
                /[^\r\n\t\f\v '"`<>~@#%=+&(){}\[\]|\\,:;]*[A-Za-z0-9_-][^\r\n\t\f\v '"`<>~@#%=+&(){}\[\]|\\,:;]*/g,
              ) || [],
            safelist: {
              standard: [
                /^(container|grid|row|col)/,
                /^(nav|header|footer)/,
                /^(btn|button)/,
                /^(active|open|show)/,
              ],
              deep: [/^swiper-/],
              greedy: [],
              keyframes: true,
              variables: true,
            },
          }),
        ]
      : []),
  ],
};
