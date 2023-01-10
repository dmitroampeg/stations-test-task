module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
          alias: {
            assets: "./assets",
            components: "./src/components",
            features: "./src/features",
            types: "./src/types",
            constants: "./src/constants",
            helpers: "./src/helpers",
          },
        },
      ],
    ],
  };
};
