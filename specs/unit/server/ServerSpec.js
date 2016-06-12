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
  var url = 'http://localhost:4000';
  var options = {
    'reconnection': true,
    'reconnectionDelay' : 0,
    'force new connection' : true
  }

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

  describe('User connection', function () {
    it('should return message back with "msg" event', function (done) {
      socket = io(url, options);
      socket.once('connect', function() {
        console.log('connected!');
        socket.once('msg', function(msg) {
          expect(msg).to.equal('hello');
          socket.disconnect();
          done();
        });

        socket.emit('msg', 'hello');
      });
    });
  });

});
