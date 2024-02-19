import { join, dirname, resolve } from "path";
import { StorybookConfig } from "@storybook/react-webpack5";
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("../../../node_modules/@storybook/addon-links"),
    getAbsolutePath("../../../node_modules/@storybook/addon-essentials"),
    getAbsolutePath("../../../node_modules/@storybook/addon-onboarding"),
    getAbsolutePath("../../../node_modules/@storybook/addon-interactions"),
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: [
          "react-native-reanimated",
          "nativewind",
          "react-native-css-interop",
        ],
        babelPresets: ["nativewind/babel"],
        babelPresetReactOptions: { jsxImportSource: "nativewind" },
        babelPlugins: [
          "react-native-reanimated/plugin",
          [
            "@babel/plugin-transform-react-jsx",
            {
              runtime: "automatic",
              importSource: "nativewind",
            },
          ],
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  // core: {
  //   builder: "@storybook/builder-webpack5",
  // },
  // docs: {
  //   autodocs: "tag",
  // },
  webpackFinal: (config) => {
    config.module?.rules?.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
      include: resolve(__dirname, "../../../"), // path to project root
    });
    config.module?.rules?.push({
      test: /\.(png|jpe?g|gif|avif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [resolve("./src"), ...(config?.resolve?.modules || [])],
        fallback: {
          timers: false,
          tty: false,
          os: false,
          http: false,
          https: false,
          zlib: false,
          util: false,
          ...(config?.resolve?.fallback || {}),
        },
      },
    };
  },
};
export default config;
