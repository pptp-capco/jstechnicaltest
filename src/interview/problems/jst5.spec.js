//JST5
//Implement functions curry, add and mul
//Pass the unit test without modifying the unit tests
//hint: add and mull are binary functions that takes two arguments
//curry(add, 3)(4); // returns 7
//curry(mul, 3)(4); // returns 12

describe('curry function', () => {
    it('should return sum of two numbers when add is passed ',  () => {
        expect(curry(add, 3)(4)).toEqual(7);
    });
    
    it('should return multiplication of two numbers when mul is passed ', () => {
        expect(curry(mul, 3)(4)).toEqual(12);
    })
});

