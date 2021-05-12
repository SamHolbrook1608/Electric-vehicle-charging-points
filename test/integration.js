const unit = require('unit.js');
const sinon = require('sinon');
process.env.NODE_ENV = 'test';
const main = require('../main');

describe("Integration tests (no query placeholders)", function() {
    var qstub;
    before(function() {
        // stubbed query() simulates database success and is synchronous
        qstub = sinon.stub(main.connection, "query")
        .callsFake(function(query,fn) {
            fn(null,[ { Type:'T', Name:'N', 'Maintained by':'M' } ],null);
        });
    });

    it("index OK", function(done) {
        unit
            .httpAgent(main.app)
            .get("/index.html")
            .expect(200,done);
    });

    after(function() {
        qstub.restore();
    });
});