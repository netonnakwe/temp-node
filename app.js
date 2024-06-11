// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute)

// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf-8");

// writeFileSync("./content/third.txt", 
// `Here is the result: ${first}, ${second}`,
// {flag: 'a'});

// const {readFile, writeFile} = require('fs');

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     const first = result
//     readFile('./content/first.txt')
// })

// const http = require('http')
// const server = http.createServer((req, res)=> {
//     if(req.url === '/') {
//         res.end('Welcome to our home page')
//     } else if (req.url === '/about') {
//         res.end('Here is our short history')
//     } else {res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page that you are looking for</p>
//     <a href="/">Back home</a>
//     `)}
// })
// server.listen(3000)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems)