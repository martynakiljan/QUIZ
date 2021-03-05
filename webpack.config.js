const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = function(env = {}) {

    const {production: isProd = false} = env;

    return  {
        entry: './src/app.js',
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? 
            'none' : 'eval-cheap-module-source-map',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.[hash].js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
             
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
         
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'images',
                      
                        }
                    }
        
                },
                {
                    test: /\.(ttf|otf|woff|woff2)$/,
              
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'fonts',
                        }
                    }
          
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html'
            }),
            new CleanWebpackPlugin(),

        ]
    }
}
