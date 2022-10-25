'use strict';

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let newName = '';

const getContent = () => {
  rl.question('Write your content: ', (content) => {
    if (content.length === 0) {
      // eslint-disable-next-line no-console
      console.log('Content most be more then 0 character');
      getContent();
    } else {
      fs.writeFileSync(newName, content, (err, data) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.log('Error');
        } else {
          // eslint-disable-next-line no-console
          console.log('Success');
        }
      });
      rl.close();
    }
  });
};

const terminal = () => {
  rl.question('Write your file name: ', (fileName) => {
    if (fileName.length === 0) {
      // eslint-disable-next-line no-console
      console.log('Name most be more then 0 character!');
      terminal();
    } else {
      newName = fileName;
      getContent();
    }
  });
};

terminal();
