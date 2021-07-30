//JST3
// Your objective is to
// Make the unit test pass
// Keep the unit test unchanged
// Write your source code below this line


//test
describe("doubleAll function", function() {
    it("should double each element in an array and return the doubled array", function() {
        expect(doubleAll([1,2,3,4,5])).toEqual([2,4,6,8,10]);
    });
    
    it('should return invalid input message if the input is not an array', () => {
        expect(doubleAll(null)).toEqual('invalid input');
        
    })
});
