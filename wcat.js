//1) node wcat.js filepath => display the content of the file in terminal 

//2) node wcat.js filepath1 filepath2 filepath3 => display the content of all the files

//COMMANDS to be written in integrated terminal
// node wcat.js f1.txt
//node wcat.js f1.txt f2.txt f3.txt

const fs= require("fs");

//to take input and we use slice because we dont require the extra information
let inputArr= process.argv.slice(2);

//console.log(inputArr);

let filesArr=[];

//to take files input into different array
for(let i=0; i<inputArr.length; i++){
    filesArr.push(inputArr[i]);
}

//to check if all the files are present or not
for(let i=0; i<filesArr.length; i++){
    let doesExist= fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("Files does not exist");
        return;
    }
}

//to read the content of the path
let content="";

for(let i=0; i<filesArr.length; i++){
    let fileContent= fs.readFileSync(filesArr[i]);
    content+= fileContent+"\n";
}

console.log(content);