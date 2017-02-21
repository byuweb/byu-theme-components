const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.ejs\.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ejs-compiled-loader',
                    options: {
                        htmlmin: true,
                        strict: true,
                        compileDebug: false,
                        rmWhitespace: true
                    }
                }]
            },
            {
                test: /\.html$/,
                exclude: [/\.ejs\.html$/, /node_modules/],
                use: {
                    loader: 'html-loader',
                    options: {
                        // attrs: ['link:href'],
                        interpolate: true
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'url-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            optipng: {
                                optimizationLevel: 7,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    context: path.resolve(__dirname, "components"),
    entry: './bundle.js',
    output: {
        filename: 'components.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map'
};
