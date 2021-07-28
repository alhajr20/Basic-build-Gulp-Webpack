module.exports = {
    mode: 'production',
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env'],
                    plugins: ['babel-plugin-root-import']
                }
            }
        ]
    }
};