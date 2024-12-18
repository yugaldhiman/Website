const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // मुख्य एंट्री फाइल
    output: {
        filename: 'bundle.js', // आउटपुट फाइल का नाम
        path: path.resolve(__dirname, 'dist'), // आउटपुट फोल्डर
        clean: true, // 'dist' फोल्डर को हर बिल्ड से पहले साफ करें
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js और .jsx फाइल्स के लिए
                exclude: /node_modules/,
                use: 'babel-loader', // Babel का उपयोग करें
            },
            {
                test: /\.css$/, // .css फाइल्स को लोड करें
                use: ['style-loader', 'css-loader'], // स्टाइल और सीएसएस लोडर
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // HTML फाइल के लिए टेम्पलेट
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // इन एक्सटेंशन्स को ऑटोमेटिकली पहचानें
    },
};

