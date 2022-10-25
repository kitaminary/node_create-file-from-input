/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let newName = '';
const newContent = '';

const getFileName = () => {
  rl.question('Write your file name: ', (fileName) => {
    if (fileName.length === 0) {
      console.log('Name is required!');
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
      console.log('Content is required!');
      getContent();
    } else {
      fileCreator();
      rl.close();
    }
  });
};

const fileCreator = () => {
  fs.writeFile(`./new_files_folder/${newName}`, newContent, (err, data) => {
    if (err) {
      console.log('Error');
    }
    console.log('Success');
  });
};

getFileName();
