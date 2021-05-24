// importing a fetch api module
const fetch = require('node-fetch');
const fs = require('fs');

// using a fetch api to requsest for the JSON data
fetch('http://jsonplaceholder.typicode.com/posts').then(res => {
    // writting the data in  stream to posts.json
    const lash = fs.createWriteStream("posts.json");
    console.log("file written succesfully")
    // pipping the data writting with the respond 
    res.body.pipe(lash);
});
    
