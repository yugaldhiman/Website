const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point
    output: {
        filename: 'bundle.js', // Output file
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile JS files
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/, // Load CSS files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Use this HTML as a template
        }),
    ],
};
