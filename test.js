var chai = require('chai');
var Mocha = require('mocha');

// Global variables
should = chai.should();

// Configure Mocha
mocha = new Mocha({
    reporter: process.env.MOCHA_REPORTER || 'spec',
    bail: false
});

// Load our test file
mocha.addFile('./tests/tests.js');

mocha.run(function(failures){
    process.exit(failures);
});