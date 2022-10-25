/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let newName = '';

const getFileName = () => {
  rl.question('Write your file name: ', (fileName) => {
    if (fileName.length === 0) {
      console.log('Name most be more then 0 character!');
      getFileName();
    } else {
      newName = fileName;
      getContent();
    }
  });
};

const getContent = () => {
  rl.question('Write your content: ', (content) => {
    if (content.length === 0) {
      console.log('Content most be more then 0 character');
      getContent();
    } else {
      fs.writeFile(newName, content, (err, data) => {
        if (err) {
          console.log('Error');
        }
        console.log('Success');
      });

      rl.close();
    }
  });
};

getFileName();
