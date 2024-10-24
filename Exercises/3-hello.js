'use strict';

// Prepare function to print greeting with single argument

const { name } = require(`./1-let.js`);
const hello = () => {
    console.log(`Hello, ${name}`);
};

hello();
module.exports = { hello };
