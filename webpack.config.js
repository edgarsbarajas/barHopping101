plugins: [
    new webpack.DefinePlugin({
        'API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:3001/')
    })
]
