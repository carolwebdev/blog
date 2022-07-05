const path = require('path')
const { npm_execpath } = process.env
if (path.basename(npm_execpath) !== 'yarn.js') {
  console.error(
    `\n\n\nI'm afraid I cannot do that. This project only accepts yarn as package manager.\nPlease try again, but now typing yarn install.
      If you have questions on how to contributing, please, consult CONTRIBUTING.MD from root directory.
      \n\n\n`,
  )
  process.exit(1)
}
