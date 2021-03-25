// Import connection
const mongoose = require('./connection/_connection')

// Import model
const dog = require('./model/dog')

// Import object, this data is use for upload 
const seed = require('./seeds/dogs')

// batch process 
// if you did not create a database and collection on mongodb.com
// <gallery> will be your collection
// and your database will be the string you put in the url after @cluster0.mbm0p.mongodb.net/<your-data-base-name>
// will auto generate

Gallery.insertMany(seed,(err,gallery)=>{
  if(err){ return err }
  console.log('Data import completed')
  console.log(gallery)
  mongoose.connection.close();
})

// to execute on command line type 'node import.js'