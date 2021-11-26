module.exports = () => {
  return {
    plugins: [
      require('postcss-cssnext')({
        browsers: ['Android >= 4.0', 'iOS >= 7']
      }),
      require('postcss-import')
    ]
  }
}
