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
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
