const rootMain = require("../../../.storybook/main");

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(
  ...["../src/lib/**/*.stories.mdx", "../src/lib/**/*.stories.@(js|jsx|ts|tsx)"]
);

/** Emotion CSS-prop support */
rootMain["webpackFinal"] = async (config) => {
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-env"),
    require.resolve("@babel/preset-typescript"),
    [
      require.resolve("@babel/preset-react"),
      {
        runtime: "automatic",
        importSource: "@emotion/react",
      },
    ],
  ];

  config.module.rules[0].use[0].options.plugins = [
    ...config.module.rules[0].use[0].options.plugins,
    "@emotion/babel-plugin",
  ];

  return config;
};

module.exports = rootMain;
