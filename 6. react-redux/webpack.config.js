const dotenv = require("dotenv");
const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin"); // npm i -D html-webpack-plugin
const ManifestPlugin = require("webpack-manifest-plugin"); // npm i -D webpack-manifest-plugin
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const appSrc = path.resolve(__dirname, "src");
const appHtml = path.resolve(__dirname, "public", "index.html");
const appPublic = path.resolve(__dirname, "public");

const webpackEnv = process.env.NODE_ENV; // 따로 env 설정을 하지 않아도 NODE_ENV는 잡아줌
const nodeEnv = process.env.NODE_ENV;

dotenv.config();

// 환경 변수 추출을 위한 함수
function getClientEnv(nodeEnv) {
  return {
    "process.env": JSON.stringify(
      Object.keys(process.env)
        .filter((key) => /^REACT_APP/i.test(key))
        .reduce(
          (env, key) => {
            env[key] = process.env[key];
            return env;
          },
          { NODE_ENV: nodeEnv }
        )
    ),
  };
}

module.exports = (webpackEnv) => {
  const isProd = webpackEnv === "production";
  const clientEnv = getClientEnv(nodeEnv);
  const PORT = process.env.REACT_APP_PORT;

  return {
    mode: "development", // development, production, none 존재
    plugins: [
      new HtmlWebpackPlugin({ template: appHtml }),
      new webpack.DefinePlugin(clientEnv),
      new ManifestPlugin({
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce(
            (manifest, { name, path }) => ({
              ...manifest,
              [name]: path,
            }),
            seed
          );
          const entryFiles = entrypoints.main.filter(
            (filename) => !/\.map/.test(filename)
          );
          return { files: manifestFiles, entrypoints: entryFiles };
        },
      }),
      // !isProd && new BundleAnalyzerPlugin(), // 개발모드일 때만 analyzer 사용
    ],
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
          include: appSrc, // ./src 아래 포함된 js만 변환합니다.
          exclude: /(node_modules|bower_components)/,
        },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: "url-loader",
              options: {
                limit: 10000,
                outputPath: "static/media",
                name: "[name].[hash:8].[ext]",
              },
            },
            {
              loader: "file-loader",
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                outputPath: "static/media",
                name: "[name].[hash:8].[ext]",
                esModule: true, // commonJS 쓰실거잖아요. true로 (Default: true. this is explicit)
              },
            },
          ],
        },
      ],
    },
    cache: {
      type: isProd ? "filesystem" : "memory", // 개발시 memory, 배포시 filesystem 캐쉬
    },
    output: {
      filename: isProd ? "static/js/[name].[chunkhash:8].js" : "static/js/bundle.js", // 번들한 결과물의 파일명
      path: path.join(__dirname, "build"), // 어디에 빌드 결과물을 둘 것인가
    },
    devServer: {
      // npm i -D webpack-dev-server 후 이용 가능
      host: "localhost",
      port: PORT,
      contentBase: appPublic,
      open: true,
      hot: true,
      historyApiFallback: true,
      overlay: true,
      stats: "errors-only", // 'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose'
      after: function (_, _, _) {
        console.log(`http://localhost:${PORT}\n`);
      },
    },
  };
};
