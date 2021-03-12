const fs = require('fs')


const readStream = fs.createReadStream('./data/bigdata.txt', {encoding :'utf8'}) 
const writeStream = fs.createWriteStream('./data/bigdata1.txt')
readStream.on('data', (chunk) => {
   console.log('<----NEW CHUNK OF DATA-->')
   console.log(chunk)
})

//pipping 

readStream.pipe(writeStream)

