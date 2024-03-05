const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        init: './src/script/init.ts',
        game: './src/script/game.ts',
        data: './src/script/data.ts'
    },
    output: {
        filename: '[name].js', 
        path: path.resolve(__dirname, 'dist', 'script')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
