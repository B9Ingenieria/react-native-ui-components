module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        tarballDir: 'release',
      },
    ],
    '@semantic-release/changelog',
  ],
  branches: ['mainline', { name: 'beta', prerelease: true }],
  preset: 'angular',
};
