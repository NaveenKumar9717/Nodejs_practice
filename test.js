// const name = 'm
//
// curr('Naveen')
// const {people, ages} = require('./server')
// console.log(people[0],ages[0])
const fs = require('fs')


// <-----Read files------>

// fs.readFile('./data/doc.txt', (error,data) =>{
//     if(error){
//         console.log(error)
//     }
//     console.log(data.toString())
// })

   //read file

// fs.writeFile('./data/doc.txt', 'HI EVERTHING CHANGES', () => {
//   console.log('FILE EDITED') 
// })

// make directories

fs.mkdir('./new.txt', (error) => {
    console.log(error)
})

//<------ delete file
 if(fs.existsSync('./data/doc.txt')){
     fs.unlink('./data/doc.txt', (error)=>{
         if(error){
             console.log(error)
         }
         console.log('file deleted')  
     })
 }


// console.log(people[0])

// console.log(__dirname)
// console.log(__filename)
