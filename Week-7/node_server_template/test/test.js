const chai = require('chai');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const { expect } = chai;

var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Array', function () {
  describe('#indexOf()', function () {
    it('returns correct index value', function () {
      assert.equal([1, 2, 3].indexOf(2), 1);
    });
  });
});

describe('index.html Tests', function () {
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
});