//JST1
// Your objective is to
// Make the unit test pass
// Keep the unit test unchanged
// Write your source code below this line
// to run the test in terminal use ```npm t src/interview/problems/jst1.spec.js```



//Unit test
describe("Interview test", function() {
    it("should print hello", function() {
        expect(greet('John Doe')).toBe('Hello John Doe');
        expect(greet('Capco')).toBe('Hello Capco');
    });
    
    it('should accept only string otherwise return invalid', function() {
        expect(greet()).toEqual('invalid');
    });
})

