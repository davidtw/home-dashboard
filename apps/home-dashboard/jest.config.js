module.exports = {
  name: 'home-dashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/home-dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
