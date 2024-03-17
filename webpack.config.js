const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts', // Adjust the entry point as needed
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        fallback: {
            fs: false,
            vm: require.resolve('vm-browserify'),
            path: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images', // Output directory for the images
                        },
                    },
                ],
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.geojson$/,
                type: 'asset/resource',
            },
        ],
    },
};