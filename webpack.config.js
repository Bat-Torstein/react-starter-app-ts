const path = require('path');

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: false, // turned off as causes delay
 }
}

// const autoprefixer = require('autoprefixer')
// const PostCSSLoader = {
//    loader: 'postcss-loader',
//    options: {
//      ident: 'postcss',
//      sourceMap: false, // turned off as causes delay
//      plugins: () => [
//        autoprefixer({
//         browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
//        })
//      ]
//    }
// }

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 4200,
  },  
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  performance: {
    hints: false,
  },
  resolve: 
  {
    extensions: ['.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [styleLoader, 'css-loader', "sass-loader"]
       },
       {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [styleLoader, CSSModuleLoader, "sass-loader"]
       }    
    ],
  },
};