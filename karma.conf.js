module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'tinysequence.js',
      'spec/**/*.spec.js'
    ],
    browsers: ['PhantomJS'],
    reporters: ['spec']
  });
}
