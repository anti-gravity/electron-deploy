import request from 'request'

export const isPackageUpToDate = ({ name, version }) => new Promise((resolve, reject) => {
  request(`http://registry.npmjs.org/${ name }`, (err, res) => {
    err && reject(err)

    if (res['dist-tags'].latest === version) {
      resolve()
    } else {
      reject()
    }
  })
});
