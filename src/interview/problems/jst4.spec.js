//JST4
// Your objective is to
// Make the unit test pass
// Keep the source code unchanged
// You can change the unit test but, not the expect statement
const company1 = {companyName: 'Capco'}
const company2 = {companyName: 'Google'}
function printString() {
    return 'I want to work at '+ this.companyName
}

//unit test
describe("Interview test", function() {
    it("should print I want to work at Capco", function() {
        const actual = printString.apply(company1)
        expect(actual).toBe('I want to work at Capco');
    });
    it("should print I want to work at Google", function() {
        const actual = printString.call(company2)
        expect(actual).toBe('I want to work at Google');
    });
});
