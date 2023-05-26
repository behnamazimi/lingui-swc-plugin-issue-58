const {
  BUILD_ID
} = process.env;

const experimental = {
  swcPlugins: [
    [
      "@lingui/swc-plugin",
      {
        runtimeModules: {
          i18n: ["@lingui/core", "i18n"],
          trans: ["@lingui/react", "Trans"],
        },
      },
    ],
  ],
};

const nextConfig = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
  /* eslint-disable no-param-reassign */
  /* eslint-enable no-param-reassign */
  productionBrowserSourceMaps: true,
  compress: false,
  reactStrictMode: true,
  externalHelpers: false,
  experimental,
  typescript: {
    // We have the `check-types` job also running in CI which tests
    // types in all files, not just the production ones. Setting this
    // `ignoreBuildErrors` flag to true saves us time in the build by
    // not requiring a type check which in turn will speed up the
    // whole pipeline.
    ignoreBuildErrors: true,
  },
  eslint: {
    // We run ESLint on CI and on pre-commit hooks. We don't need Next
    // to run it for us on build as well.
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};

module.exports = () =>nextConfig
