const path = require('path')
const glob = require('glob')

const root = path.resolve(__dirname, '../')
const projectsDir = path.resolve(root, 'src')


function resolve (url) {
  path.join(root, url)
}

function getEntry () {
  return glob.sync(projectsDir + '/**/project.json').reduce((result, p) => {
    const mainPath = p.replace(/project\.json$/, 'main.js')
    const key = mainPath.replace(projectsDir + '/', '').replace(/\.ts$/, '')
    result[key] = mainPath
    return result
  }, {})
}
module.exports = {
  getEntry,
  resolve
}