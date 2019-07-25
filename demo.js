
//File read with   synchronous  method
/*
const fs = require('fs')
let content
try {
  content = fs.readFileSync('file.md', 'utf-8')
} catch (ex) {
  console.log(ex)
}
console.log(content)
console.log('End of the file');
*/

/*
const fs = require('fs')
console.log('start reading a file...')
fs.readFile('file.md', 'utf-8', function (err, content) {
  if (err) {
    console.log('error happened during reading the file')
    return console.log(err)
  }

  console.log(content)
})
console.log('end of the file')
*/



/*

var Promise = require('bluebird');
 // Converts all function of 'fs' into promises.
var fs = Promise.promisifyAll(require('fs'));

fs.readFileAsync('file.md','utf8')
// 'then' when result comes.
.then(function(data) {
  console.log(data);
})
//'catch' when error comes.
.catch(function(err) {
  console.log(err);
});

console.log("something else");

*/


//File read with asynchronous programming
/*
var fs = require("fs");
fs.readFile('file.md','utf8',function(err,data){
    if(!err) {
       console.log(data);
    }
});
console.log("something else");
*/



/*

const getrandomnumber = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 20));
        }, 1000);
    });
}


const addRandomNumber = async function(){
    const sum = await getrandomnumber() + await getrandomnumber();
    console.log(sum);
}

addRandomNumber();

*/