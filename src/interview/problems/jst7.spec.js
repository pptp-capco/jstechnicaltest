//JST7
// Your objective is to
// Make the unit test pass
// Keep the unit test unchanged
// Write your source code below this line




//unit test
describe("reverseString function", function() {
    it("should reverse a string", function() {
        expect(reverseString('hello hi')).toBe('ih olleh');
    });
    
    it("should return invalid string if the input is anything else but a string", function() {
        expect(reverseString(2)).toBe('invalid string');
        expect(reverseString(null)).toBe('invalid string');
        expect(reverseString(undefined)).toBe('invalid string');
    });
});
