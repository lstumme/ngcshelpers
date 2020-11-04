const mongoose = require('mongoose');
const idtoString = require('../tools/dbutils');
const { expect } = require('chai');

describe('dbutils tests', function () {
    it('should convert array of ids to array of strings', function () {
        const inputs = [];
        for (let i = 0; i < 10; i++) {
            inputs.push(new mongoose.Types.ObjectId());
        }
        const outputs = idtoString(inputs);
        for (let i = 0; i < inputs.length; i++) {
            expect(outputs[i]).to.be.equal(inputs[i]._id.toString());
        }
    })
});