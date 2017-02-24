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
                        interpolate: true,
                        // minimize: true
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "css-loader",
                    options: {
                        minimize: true
                    }
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
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
            },
            //Separate this out because svg-url-loader is much more efficient than the base64 encoding in url-loader
            {
                test: /\.svg$/i,
                loaders: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            noquotes: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true
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
