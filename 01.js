const fs = require('fs')

const readDir = new Promise ((resolve, reject) =>{
    fs.readdir('/dir', (err, result) => {
        if(err){
            reject(err)
        }
        resolve(result)
})
})

readDir
    .then(result => console.log(result))
    .catch(err => console.log(err))