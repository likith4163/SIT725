const chai = require('chai');
const fs = require('fs');
var request = require("request");
const { JSDOM } = require('jsdom');
const { expect } = chai;

describe("Add two numbers", function () {
  var url = "http://localhost:3000/addTwoNumbers/a/5";
  it("should return status 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done()
    });
  });
  it("returns statusCode key in body to check if api gives right result should be 400", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body)
      expect(body.statusCode).to.equal(400);
      done()
    });
  });

  it("returns the result not equal to 30", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(30);
      done()
    });
  });
});

describe("Adding two negative numbers", function () {
  var url = "http://localhost:3000/addTwoNumbers/-4/-5";
  it("should return status 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done()
    });
  });
  it("returns statusCode key in body to check if api gives right result should be 400", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body)
      expect(body.statusCode).to.not.equal(400);
      done()
    });
  });

  it("returns the result equal to -9", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(-9);
      done()
    });
  });

  it("returns the result not null", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body)
      expect(body.result).to.not.be.a('null');
      done()
    });
  });
});

describe("Adding Special Characters", function() {
  var url = "http://localhost:3000/addTwoNumbers/@/#";
  it("returns status 200", function(done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done()
      });
  });
});

describe('index.html Tests check for whether the given car exists in the html page or not as well as content check', function () {
  let dom, document;

  before(function () {
    // Read and parse index.html
    const html = fs.readFileSync('./views/index.html', 'utf-8'); // Adjust the path if necessary
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  it('should contain the text "2017 MERCEDES BENZ G63 AMG"', function () {
    // Check if the text exists in the document
    const content = document.body.textContent || document.body.innerText;
    expect(content).to.include('2017 MERCEDES BENZ G63 AMG');
  });
  it('should contain the text "S224740885"', function () {
    // Check if the text exists in the document
    const content = document.body.textContent || document.body.innerText;
    expect(content).to.include('S224740885');
  });
});

describe("Multiplying Two Numbers", function () {
  var url = "http://localhost:3000/multiplyTwoNumbers/3/6";

  it("should return status 200 to check API working", function (done) {
      request(url, function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
      });
  });
  it("returns the correct result of multiplication", function (done) {
      request(url, function (error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.equal(18);
          done();
      });
  });
  it("returns the result as a number", function (done) {
    request(url, function (error, response, body) {
        body = JSON.parse(body);
        expect(body.result).to.be.a('number');
        done();
    });
});
  it("returns the result not equal to 340", function (done) {
      request(url, function (error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.not.equal(340);
          done();
      });
  });
});