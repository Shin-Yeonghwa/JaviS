/* node.js 설치 */
var output = '';
for (var i = 0; i < 10; i++) {
    console.log(output += '*');
}

/* 내부모듈 */
var os = require('os');
console.log(os);

/* 외부모듈 */
var request = require('request');
request('http://www.google.com', function (error, response, body) {
    console.log(body);
    });