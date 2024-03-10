const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        start: './src/script/start.ts',
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
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', // Preset para configurar o ambiente de execução
                            '@babel/preset-typescript' // Preset para compilar TypeScript
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
