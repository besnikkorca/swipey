module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            types: "./src/types",
            assets: "./src/assets",
            screens: "./src/screens",
            components: "./src/components",
            hooks: "./src/hooks",
            navigation: "./src/navigation",
            services: "./src/services",
            contexts: "./src/contexts",
            utils: "./src/utils",
            // named with underscore since there seem's to be
            // an underlying library which is named constants
            _constants: "./src/constants",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
