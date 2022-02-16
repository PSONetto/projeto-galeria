// Imports de dependências e plugins
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// Variáveis e Constantes
const devMode = process.env.NODE_ENV !== 'production'

// Exports (CommonJS)
module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: {
        main: './src/index.js'
    },
    devServer: {
        contentBase: './build',
        port: 9000,
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/build'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new CopyWebpackPlugin([
            { context: 'src/', from: '**/*.html' },
            { context: 'src/', from: 'imgs/**/*' }
        ]),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 12,
            },
        }),
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)$/,
            use: ['file-loader']
        }]
    }
}