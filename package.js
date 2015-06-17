Package.describe({
  name: 'davidzhu918:es5-sham',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor support for es5-sham',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/davidzhu918/meteor-es5-sham',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('es5-sham.js', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('davidzhu019:es5-sham');
  api.addFiles('es5-sham-tests.js');
});
