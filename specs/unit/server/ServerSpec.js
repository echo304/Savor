var expect = require('chai').expect;
var io = require('socket.io-client')
var handler = require('../../../server/handlers/handlers.js');

describe('Server Side Unit Test', function() {
  describe('Test for Test', function() {
    it('should pass', function() {
      expect(true).to.equal(true);
    });
  });

  describe('queryRefiner', function() {

  });
});

describe('Socket.io Unit Test', function () {
  var socket;

  beforeEach(function (done) {
    // Setuo
    socket = io.connect('http://localhost:4000', {
      'reconnection delay' : 0,
      'reopen delay' : 0,
      'force new connection' : true
    });
    socket.on('connect', function () {
      console.log('worked...');
    });
    socket.on('disconnect', function () {
      console.log('disconnected');
    });
    done();
  });

  afterEach(function(done) {
    // Cleanup
    if(socket.connected) {
      console.log('disconnecting...');
      socket.disconnect();
    } else {
      // There will not be a connection unless you have done() in beforeEach, socket.on('connect'...)
      console.log('no connection to break...');
    }
    done();
  });

  describe('Test for Test', function () {
    it('should pass the test', function (done) {
      expect(true).to.equal(true);
      done();
    });

    it('should fail the test', function (done) {
      expect(true).to.equal(false);
      done();
    });
  });

});
