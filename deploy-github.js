const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Gyumeijie/cheatsheets.io',
  },
  () => {
    // eslint-disable-next-line no-console
    console.log('Deploy Complete!')
  }
)
