let fs = require('fs');
/*fs.readFile('ejemplo2.docx','utf-8',(err,data)=>{
   if(err){
       console.log('error:',err);
   } else {
       console.log(data);
   }
});*/

fs.writeFile('ejemplo.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
console.log('The file has been saved!');
});