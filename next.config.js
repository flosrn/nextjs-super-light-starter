/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin');

    config.plugins.push(
      new MangleCssClassPlugin({
        classNameRegExp:
          '(([a-zA-Z-:]*)[\\\\\\\\]*:)*([\\\\\\\\]*!)?tw-[a-zA-Z-]([a-zA-Z0-9-]*([\\\\\\\\]*(\\%|\\#|\\.|\\[|\\]))*)*',
        ignorePrefixRegExp:
          '((hover|focus|active|disabled|visited|first|last|odd|even|group-hover|focus-within|xs|sm|md||lg|xl)(\\\\\\\\\\\\\\\\|\\\\)?:)*',
        log: true,
      })
    );

    return config;
  },
};
