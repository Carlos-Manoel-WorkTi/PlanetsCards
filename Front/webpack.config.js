const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        start: './src/script/home/home.ts',
        game: './src/script/game/game.ts',  
        login: './src/script/login/login.ts',   
        logout: './src/script/logout/logout.ts',     
        profile: './src/script/profile/perfil.ts' ,
        register: './src/script/register/register.ts'
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
                            '@babel/preset-env', 
                            '@babel/preset-typescript' 
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
