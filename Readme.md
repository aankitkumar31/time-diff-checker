# time-diff-checker
time-diff-checker is a package to give you time difference with current time.
for example difference will be in year, month, date, hour, minutes and seconds. this is generally built to show time in feed as facebook, twitter and other social media are showing how much hours before you have posted any post.

## installation
`npm install --save time-diff-checker`

## Dependencies 
`npm install --save moment`

## Usage
`let timeDiff = require('time-diff-checker');`

## Example :

```let timeDiff = require('time-diff-checker');
let date = new Date();
console.log(timeDiff(date)) // 50 is length of string```