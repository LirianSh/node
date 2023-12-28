const fs = require('fs')

// const readText = fs.readFileSync("./text.txt", 'utf-8')
// console.log(readText)

// const newText = "This is the new text"
// fs.writeFileSync("./text.txt", newText)


// // callback

// function hello(ime, callback){
//     console.log(`Zdravo ${ime}`);
//     callback();
// }

// function chao(){
//     console.log('Chao!');
// }

// hello('Lirian', chao)

// // Async

// fs.readFile("./text.txt", "utf-8",(err, text) => {
//     if (err){
//         return console.log('ima greshka')
//     }
//     console.log(`Async verzija ${text}`
// )}) 

// console.log('test')


// fs.writeFile('./asyncWrite.txt', 'async text', 'utf-8', (err) => {
//     console.log('good')
// })


//promise pattern

// //1
// const fileWrite = () => {};

// //2
// const fileWrite1 = () => {
//     return new Promise();
// };

// //3
// const fileWrite2 = () => {
//     return new Promise(() => {});
// };

// //4

// const fileWrite3 = () => {
//     return new Promise((success, fail) => {});
// }

// //5

// const fileWrite4 = () => {
//     return new Promise((seccess, fail) => {
//         fs.writeFile('data.txt', "Hello node.js", "utf-8", (err) => {
//             if(err){
//                 return console.log(err)
//             } else {console.log("ok")}
//         })
//     })
// }

// //6

// const filewrte5 = () => {
//     return new Promise((success, fail) => {
//         fs.writeFile('data.txt', 'hello node.js', 'utf-8', (err) => {
//             if (err) return fail(err);
//             return success();
//         })
//     })
// }


const fileWrite = (filename, data) =>{
    return new Promise((success, fail) =>{
        fs.writeFile(filename, data, 'utf-8', (err) => {
            if(err) return fail(err);
            return success();
        })
    })
}




const fileRead = (filename) => {
    return new Promise((success, fail) =>{
        fs.readFile(filename, "utf-8",(err, data) => {
            if(err) return fail(err);
            return success(data);
        }) 
    })
}

const main = async() => {
    try {
        await fileWrite('data.txt', 'new file');
    } catch(err) {
        console.log(err);
    }
}

main();

const imenik = [
    {
        ime: 'Lirian Shabani', 
        telefon: 45789, 
    },
    {
        ime: 'John Smith', 
        telefon: 45789, 
    },
    {
        ime: 'Alexa Jones', 
        telefon: 45789, 
    },

];

(async () => {
    try{
        const imenikData = JSON.stringify(imenik);
        await fileWrite('imenik.json', imenikData)
        let dataString = await fileRead('imenik.json');
        let data = JSON.parse(dataString);
    } catch (err) {
        console.log(err)
    }
})();

