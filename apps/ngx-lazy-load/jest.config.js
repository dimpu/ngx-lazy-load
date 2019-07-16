module.exports = {
  name: 'ngx-lazy-load',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngx-lazy-load',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
