//JST2
// Make the unit test pass
// Keep the expectation unchanged
// Modify const actual but don't remove the back ticks and make use of variable x



// unit test
describe('template literal', () => {
    const x = 10;
    it('should evaluate variable x declared above',  () => {
        //write your solution within the back ticks. Use the const x declared above.
        const actual = `value of x is ${x}`
        expect(actual).toEqual('value of x is 10');
    });
});
