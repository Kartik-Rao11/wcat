//1) node wcat.js filepath => display the content of the file in terminal 

//2) node wcat.js filepath1 filepath2 filepath3 => display the content of all the files

//COMMANDS to be written in integrated terminal
// node wcat.js f1.txt
//node wcat.js f1.txt f2.txt f3.txt

const { Console } = require("console");
const fs= require("fs");

//to take input and we use slice because we dont require the extra information
let inputArr= process.argv.slice(2);

//console.log(inputArr);

let filesArr=[];
let optionsArr = [];

//===============> placed files path in filesArr <=============
for (let i = 0; i < inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    // console.log(firstChar);
    if (firstChar == '-') {
        optionsArr.push(inputArr[i]);
    }
    else {
        filesArr.push(inputArr[i]);
    }
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
    content+= fileContent+"\r\n";
}

console.log(content);

let contentArr = content.split("\r\n");
console.table(contentArr);

// now for command -s (to remove extra space)
let isSPresent = optionsArr.includes("-s");
if (isSPresent) {
    for (let i = 1; i < contentArr.length; i++){
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        }
        else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    console.table(contentArr);
    let tempArr = [];
    //push everything in tempArr except null
    for (let i = 0; i < contentArr.length; i++){
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    console.log("data after removing extra lines\n",tempArr);
}