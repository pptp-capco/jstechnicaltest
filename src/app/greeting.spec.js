// import { greeting } from './greeting'

// Solution
function greeting (name) {
    return `Hello ${name}`
}

describe('main', () => {
    it('should return true if true', () => {
        expect(true).toEqual(true);
    });
    
    it('should greet a person', () => {
        expect(greeting('John Doe')).toEqual('Hello John Doe');
        expect(greeting('Jane')).toEqual('Hello Jane');
    })
});
